import { SampleRecord } from '../records'

export const makeSampleRecord = (item: any): SampleRecord => {
  if (!item) return new SampleRecord()
  return new SampleRecord({
    ...item
  })
}
