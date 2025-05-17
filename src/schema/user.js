// user.js
import { gql } from "apollo-server";

export const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(name: String!, email: String!): User
  }
`;
