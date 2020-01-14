import { ApolloServer } from 'apollo-server'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

/**
 * This is for local development.
 * Normally we'd run this server instance
 * locally, with no authentication.
 *
 * For usage as middleware in another HTTP server
 * runtime (e.g. koa, express, etc.) we won't use
 * this server file.
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
