import { BaseContext, Context, DefaultState } from 'koa'

export interface AppContext extends BaseContext {}

export type DataAccessLayerState = DefaultState

export type DataAccessLayerContext = AppContext & Context
