const { User } = require("../models");

//bringing in the signToken from the the function in auth
const { signToken } = require("../utils/auth");

const levelData = [
	{
		levelId: 1,
		levelName: "Level1",
		isLocked: false,
		isDefeated: false,
		roundHistory: [],
	},
	{
		levelId: 2,
		levelName: "Level2",
		isLocked: true,
		isDefeated: false,
		roundHistory: [],
	},
	{
		levelId: 3,
		levelName: "Level3",
		isLocked: true,
		isDefeated: false,
		roundHistory: [],
	},
	{
		levelId: 4,
		levelName: "Level4",
		isLocked: true,
		isDefeated: false,
		roundHistory: [],
	},
	{
		levelId: 5,
		levelName: "Level5",
		isLocked: true,
		isDefeated: false,
		roundHistory: [],
	},
];

const resolvers = {
	Query: {
		user: async (parent, { _id }, context) => {
			const user = await User.findById(_id);
			//_id is the same in typeDefs query
			return user;
		},
		allusers: async (parent, args, context) => {
			const users = await User.find({});
			return users;
		},
	},
	Mutation: {
		addUser: async (parent, { username, password }) => {
			const user = await User.create({ 
        username, 
        password,
        levels: levelData,
      });
			//now that a user has been added, we will make a token out of that user
			const token = signToken(user);
			//return user;
			return { token, user };
		},
	},
};

module.exports = resolvers;
