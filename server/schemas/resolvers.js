const { User } = require("../models");

//bringing in the signToken from the the function in auth
const { signToken } = require("../utils/auth");

const levelData = [
	{
		levelId: 1,
		levelName: "Level1",
		isLocked: false,
		isDefeated: false,
		// roundHistory: [],
		roundHistory: "asdf",
	},
	{
		levelId: 2,
		levelName: "Level2",
		isLocked: true,
		isDefeated: false,
		// roundHistory: [],
		roundHistory: "asdf",
	},
	{
		levelId: 3,
		levelName: "Level3",
		isLocked: true,
		isDefeated: false,
		// roundHistory: [],
		roundHistory: "asdf",
	},
	{
		levelId: 4,
		levelName: "Level4",
		isLocked: true,
		isDefeated: false,
		//roundHistory: [],
		roundHistory: "asdf",
	},
	{
		levelId: 5,
		levelName: "Level5",
		isLocked: true,
		isDefeated: false,
		// roundHistory: [],
		roundHistory: "asdf",
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
			console.log("addUser", username, password);
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

		//create a mutation for login
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new GraphQLError("Incorrect credentials", {
					extensions: {
						code: "UNAUTHENTICATED",
					},
				});
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new GraphQLError("Incorrect credentials", {
					extensions: {
						code: "UNAUTHENTICATED",
					},
				});
			}

			const token = signToken(user);
			console.log("the token and user are ", token, user);
			return { token, user };
		},
		//create a mutation for roundHistory
		// define the updateRoundHistory resolver function with the mutation arguments. This mutation name and arguments will appear in the apollo sandbox.
		updateRoundHistory: async (parent, { userId, levelId, roundHistory }) => {
			try {
				const userData = await User.findOneAndUpdate(
					//finds the exact level (user, and level)
					{ "levels._id": levelId },
					//we want to set the value of roundHistory in the levels array
					{ $set: { "levels.$.roundHistory": roundHistory } },
					{ new: true }
				);
				return userData;
			} catch (err) {
				// Log any errors and throw a new error with a more user-friendly message
				console.log(err);
				throw new Error("Error updating round history");
			}
		},
	},
};

module.exports = resolvers;
