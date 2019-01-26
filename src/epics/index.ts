import sample_epic from './sample_epic'
import { Action } from '../actions/types'
import { AppState } from '../interfaces'
import { combineEpics, Epic } from 'redux-observable'

const rootEpic: Epic<Action, Action, AppState> = combineEpics(...sample_epic)

export default rootEpic
