// import { gql } from 'apollo-server'

import defs from './defs'

const stitched = defs.join('\n')

/**
 * Make everythin as one string together
 * TODO: See how it works for the Query
 * top level, when stitching.
 */
export const typeDefs = `
  ${stitched}

  type Query {
    helloWorld: String!
    hello(name: String): String!
    user(id: ID): User!
  }
`
