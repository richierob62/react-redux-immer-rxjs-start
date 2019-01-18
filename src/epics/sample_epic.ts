import { Action } from '../actions/types'
import { AppState } from '../state'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { getWeather } from '../apis'
import { isActionOf } from 'typesafe-actions'
import { SampleAction } from './../actions/actions'
import { sampleAsyncActionSet } from '../actions/actions'
import { SampleRecord } from '../records'

const sampleEpic: Epic<Action, Action, AppState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(SampleAction)),
    switchMap(action =>
      from(getWeather(action.payload.val, action.payload.val)).pipe(
        map(() => new SampleRecord({ foo: 1 })),
        map(sampleAsyncActionSet.success),
        catchError(error => of(sampleAsyncActionSet.failure, error))
      )
    )
  )

export default [sampleEpic]
