import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import * as AT from './constants'

export type Action = ActionType<typeof actions>
