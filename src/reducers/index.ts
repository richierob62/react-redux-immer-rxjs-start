import * as actions from '../actions/actions'
import { Action } from '../actions/types'
import { AppState } from '../interfaces'
import { getType } from 'typesafe-actions'
import { InitialAppState } from '../state'
import { produce } from 'immer'

export const reducer = (state: AppState = InitialAppState, action: Action): AppState =>
  produce(state, draft => {
    switch (action.type) {
      case getType(actions.SampleAction):
        draft.sample_record.foo = action.payload.val
    }
  })

export default reducer
