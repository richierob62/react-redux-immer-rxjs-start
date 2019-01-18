import * as T from '../records'
import { Record } from 'immutable'

// interface
interface AppStateI {
  sample_record: T.SampleRecord
}

// initial state
const stateDefaults: AppStateI = {
  sample_record: new T.SampleRecord()
}

// class
export class AppState extends Record(stateDefaults) {
  get<K extends keyof AppStateI>(value: K): AppStateI[K] {
    return super.get(value, {})
  }
}

export const InitialAppState = new AppState()
