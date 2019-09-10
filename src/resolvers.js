import { Cat } from './models/Cat';

export const resolvers = {
  Query: {
    hello: () => 'Hello',
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const cat = new Cat({ name });
      await cat.save();
      return cat;
    }
  }
};
