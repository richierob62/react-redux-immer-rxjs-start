import * as AT from './constants'
import { createAction, createAsyncAction } from 'typesafe-actions'
import { SampleRecord } from '../interfaces'

export const SampleAction = createAction(AT.SAMPLE_ACTION, resolve => (val: number) =>
  resolve({ val })
)

export const sampleAsyncActionSet = createAsyncAction(
  AT.SAMPLE_ASYNC_REQUEST,
  AT.SAMPLE_ASYNC_SUCCESS,
  AT.SAMPLE_ASYNC_FAILURE
)<void, SampleRecord, Error>()
