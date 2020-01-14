import { createMockUser, parseUserCollection } from './defs'
import {
  IResolvers,
  // MockList,
} from 'graphql-tools'

/**
 * A map of functions which return data for the schema.
 *
 * https://graphql.org/blog/mocking-with-graphql/
 * https://medium.com/apollo-stack/the-apollo-server-bc68762e93b
 * https://medium.com/@th.guibert/basic-apollo-express-graphql-api-with-typescript-2ee021dea2c
 */
export const resolvers: IResolvers = {
  Query: {
    hello: (_, { name = 'John' }) => `Hello ${name || 'World'}`,
    helloWorld: () => {
      return `👋 Hello world! 👋`
    },
    user: (_, { id }) => ({ ...parseUserCollection(createMockUser()), id }),
    // users: (_, { limit }) => new MockList(limit, parseUserCollection(createMockUser())),
    // List: () => ({
    //   name: () => casual.word,
    //   tasks: () => new MockList(4, (o, { completed }) => ({ completed })),
    // }),
    // Task: () => ({ text: casual.words(10) }),
    // User: () => ({ name: casual.name }),
  },
}
