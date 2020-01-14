import { resolve } from 'path'
import { fileLoader } from 'merge-graphql-schemas'

export * from './task'
export * from './user'

export default fileLoader(resolve(__dirname), {
  extensions: ['graphql', 'gql'],
})
