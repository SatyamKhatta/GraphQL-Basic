import { posts, users } from "../data/db.js";

export const postResolvers = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    createPost: (_, { title, userId }) => {
      const newPost = { id: String(posts.length + 100), title, userId };
      posts.push(newPost);
      return newPost;
    }
  },
  Post: {
    user: (parent) => users.find((u) => u.id === parent.userId),
  }
};
