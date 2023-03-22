const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { ApolloServerPluginDrainHttpServer } = require("@apollo/server/plugin/drainHttpServer");
const http = require("http");
const cors = require('cors');
const socketio = require('socket.io');
require('dotenv').config();


//gets the auth utility
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
// const SOCKETPORT = process.env.SOCKETPORT || 4000;

const app = express(cors()); // needs cors middleware for socket.io to work
const httpServer = http.createServer(app);

const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	context: authMiddleware,
});

// create a socket.io server and allow CORS
const io = new socketio.Server(httpServer, {
	cors: {
		origin: PORT,
		methods: ['GET', 'POST'],
	},
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	app.use(
		"/graphql",
		expressMiddleware(server, {
			context: async ({ req }) => ({ token: req.headers.token }),
		})
	);

	db.once("open", () => {
		httpServer.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
		});
	});
};

// listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
	console.log(`user connected ${socket.id}`);

	socket.on('join_room', (data) => {
		const { username, room } = data;
		// join a user to a socket server room
		socket.join(room);
		console.log(`${username} has joined ${room}`);
	});

	socket.on('send_message', (data) => {
		// destructure from data
		const { username, room, message } = data;
		// all clients in room receive the sent message, including sender
		io.in(room).emit('receive_message', { username: username, message: message });
	});

	socket.on('leave_room', (data) => {
		const { username, room } = data;
		// remove the user from the socket server room
		socket.leave(room);
		console.log(`${username} has left ${room}`);
	});
});

startApolloServer(typeDefs, resolvers);
