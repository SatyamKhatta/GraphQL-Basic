import { users, posts } from "../data/db.js";

export const userResolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((u) => u.id === id),
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    }
  },
  User: {
    posts: (parent) => posts.filter((p) => p.userId === parent.id),
  }
};
