import * as actions from '../actions/actions'
import { getType } from 'typesafe-actions'
import { AppState, InitialAppState } from '../state'
import { Action } from '../actions/types'

export const reducer = (state: AppState = InitialAppState, action: Action): AppState => {
  switch (action.type) {
    case getType(actions.SampleAction):
      return state.setIn(['sample_record'], action.payload.val)

    default:
      return state
  }
}

export default reducer
