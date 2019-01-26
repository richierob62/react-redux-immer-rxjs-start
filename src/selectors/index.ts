import { AppState, SampleRecord } from '../interfaces'

export const sample_selector = (state: AppState): SampleRecord => state.sample_record
