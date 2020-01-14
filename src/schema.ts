import 'graphql-import-node'

import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
