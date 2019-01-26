import { Action } from '../actions/types'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { getWeather } from '../apis'
import { isActionOf } from 'typesafe-actions'
import { SampleAction } from './../actions/actions'
import { sampleAsyncActionSet } from '../actions/actions'
import { AppState } from '../interfaces'

const sampleEpic: Epic<Action, Action, AppState> = (action$, { value: state }) =>
  action$.pipe(
    filter(isActionOf(SampleAction)),
    switchMap(action =>
      from(getWeather(action.payload.val, action.payload.val)).pipe(
        map(() => ({ foo: state.sample_record.foo + 1 })),
        map(sampleAsyncActionSet.success),
        catchError(error => of(sampleAsyncActionSet.failure, error))
      )
    )
  )

export default [sampleEpic]
