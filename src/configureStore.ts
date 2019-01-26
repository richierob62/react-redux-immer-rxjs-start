import root_epic from './epics'
import root_reducer from './reducers'
import { Action } from './actions/types'
import { applyMiddleware, createStore, Store } from 'redux'
import { AppState } from './interfaces'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

const configureStore = (): Store<AppState> => {
  const epicMiddleware = createEpicMiddleware<Action, Action, AppState>()

  const composeEnhancers = composeWithDevTools({})

  const store = createStore(
    root_reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(root_epic)

  return store
}

export default configureStore
