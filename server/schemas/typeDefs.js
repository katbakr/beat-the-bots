const typeDefs = `#graphql
    type User {
      _id: ID
      username: String
      password: String
      levels: [Level]
    }
    #Level is a subdocument of User
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

    
    type Query {
      user(_id:ID!): User
      allusers:[User]
    }
  
    type Mutation {  
      addUser(username: String!, password: String!): Auth
      login(username: String!, password: String!): Auth
      #updateRoundHistory takes three arguments and returns the updated User which includes the updated round history
        #old# updateRoundHistory(userId: ID!, levelId: ID!, roundHistory: [String]): User
      #new# lets just have roundHistory be a string of rounds separated by commas, an example round would be bot plays roc, human plays paper win:H = bRhPwH,bPhRwB
      #we don't need userId as a parameter, we can get it from context just hand off the level id and new round histroyr
      updateRoundHistory( levelId: ID!, roundHistory: String): User

    }
`;

module.exports = typeDefs;
