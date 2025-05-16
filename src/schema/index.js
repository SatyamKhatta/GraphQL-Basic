import { gql } from "apollo-server";
import { userType } from "./user.js";
import { postType } from "./post.js";

export const typeDefs = [
  gql`
    type Query
    type Mutation
  `,
  userType,
  postType
];
