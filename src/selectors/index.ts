import * as R from '../records'
import { AppState } from '../state'

export const sample_selector = (state: AppState): R.SampleRecord => state.sample_record
