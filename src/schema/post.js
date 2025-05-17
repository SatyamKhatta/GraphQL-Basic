// post.js
import { gql } from "apollo-server";

export const postType = gql`
  type Post {
    id: ID!
    title: String!
    user: User
  }

  extend type Query {
    posts: [Post]
  }

  extend type Mutation {
    createPost(title: String!, userId: ID!): Post
  }
`;
