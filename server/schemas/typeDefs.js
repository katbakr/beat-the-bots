// const typeDefs = `#graphql
//     type User {
//     _id: ID
//     username: String
//     comments: [Comment]
//     }

//     type Game {
//     _id: ID
//     joinCode: String
//     users: [User]
//     bots: [Bot]
//     }
//     type Bot {
//     _id: ID
//     botName: String
//     isLocked: Boolean
//     isDefeated: Boolean
//     rounds: [Round]
//     comments: [Comment]
//     }

//     input Round {
//     botChoice: String
//     humanChoice: String
//     humanWin: Boolean
//     createdAt: String
//     }

//     type Comment {
//     _id: ID
//     commentText: String
//     commentAuthor: String
//     createdAt: String
//     }

//     type Auth {
//     token: ID!
//     user: User
//     }

// type Query {
//   users: [User],
//   games: [Game],
//   bots: [Bot],
//   comments: [Comment],
//   rounds: [Round]
// }

//     #type Mutation {

//     #}
// `;

// module.exports = typeDefs;

const typeDefs = `#graphql
    type User {
      _id: ID
      username: String
      password: String
      levels: [Level]
    }
    type Level {
      levelId: Int
      levelName: String
      isLocked: Boolean
      isDefeated: Boolean
      roundHistory: [String]
      _id: ID
    }
    
    type Query {
      user(_id:ID!): User
      allusers:[User]
    }
  
    type Mutation {
      addUser(username: String!, password: String!): User
    }
`;

module.exports = typeDefs;
