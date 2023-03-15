//Placeholder for commit
//DELETE UPON BUILD

const { User } = require('../models')
const levelData = [
  {
    levelId: 1,
    levelName: "Level1",
    isLocked: false,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 2,
    levelName: "Level2",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 3,
    levelName: "Level3",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 4,
    levelName: "Level4",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 5,
    levelName: "Level5",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
]

const resolvers = {
    Query: {
      user: async (parent, args, context) => {
          const user = await User.findById()
          return user
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        // const user = await User.create(args);
        const user = await User.create({ username: "Gollum", password: "password", levels: levelData })
        console.log("this is the user", user)
        return user;
      },
    },
};

module.exports = resolvers;