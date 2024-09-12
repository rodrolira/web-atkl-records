import { gql } from "apollo-server";

//Schema
const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    image: String
    create: String
  }

  type Token {
    token: String
    }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input AuthInput {
    email: String!
    password: String!
  }

  type Query {
    getUser(token: String!) : User
  }

  type Mutation {
    newUser(input: UserInput): User
    authUser(input: AuthInput): Token
  }
`;

export default typeDefs;
