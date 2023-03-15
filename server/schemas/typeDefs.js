const typeDefs = `#graphql
    type User {
    _id: ID
    username: String
    comments: [Comment]
    }

    type Game {
    _id: ID
    joinCode: String
    users: [User]
    bots: [Bot]
    }
    type Bot {
    _id: ID
    botName: String
    isLocked: Boolean
    isDefeated: Boolean
    rounds: [Round]
    comments: [Comment]
    }

    input Round {
    botChoice: String
    humanChoice: String
    humanWin: Boolean
    createdAt: ????
    }

    type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: ????
    }

    type Auth {
    token: ID!
    user: User
    }

    type Query {
    
    }

    type Mutation {

    }
`;

module.exports = typeDefs;
