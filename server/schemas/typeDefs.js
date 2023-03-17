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
    
    #trying to set up an auth type to handle returning data from a user login
    type Auth {
      token: ID!
      user: User
    }

    type Query{
    users: [User]!
    user(_id:ID!): User
    }

    #setting up mutation to handle creating a user  or user login and return Auth type instead of User type

    #addUser(username: String!, password: String!): Auth
    

    type Query {
      user(_id:ID!): User
      allusers:[User]
    }
  
    type Mutation {  
      addUser(username: String!, password: String!): Auth
      login(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
