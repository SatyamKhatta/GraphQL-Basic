import { userResolvers } from "./user.js";
import { postResolvers } from "./post.js";
import { mergeResolvers } from "@graphql-tools/merge";

export const resolvers = mergeResolvers([userResolvers, postResolvers]);
