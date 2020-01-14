import { parse, ParseFn, aString, fromMap } from 'spicery'
import casual from 'casual'
import { List } from './task'

export interface User {
  id: string
  locale: string
  tz: string
  username: string
  email: string
  lists?: List[]
}

export const createMockUser = () => ({
  EMail: casual.email,
  FullName: casual.name,
  Id: casual.uuid,
  Locale: casual.locale.replace('_', '-'),
  TZInfo: casual.timezone,
  Username: casual.username,
})

// This is new: Define a Todo Parser with spicery:
// https://swissmanu.github.io/spicery/
export const user: ParseFn<User> = x => ({
  email: fromMap(x, 'EMail', aString),
  fullName: fromMap(x, 'FullName', aString),
  id: fromMap(x, 'Id', aString),
  locale: fromMap(x, 'Locale', aString),
  tz: fromMap(x, 'TZInfo', aString),
  username: fromMap(x, 'Username', aString),
})

export const parseUserCollection = parse(user)
