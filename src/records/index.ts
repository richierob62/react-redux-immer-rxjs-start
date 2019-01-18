import { Record } from 'immutable'

interface SampleRecordI {
  foo: number
}

export const SampleRecordDefaults: SampleRecordI = {
  foo: -1
}

export class SampleRecord extends Record(SampleRecordDefaults) {
  constructor(params?: SampleRecordI) {
    super(params)
  }

  get<T extends keyof SampleRecordI>(value: T): SampleRecordI[T] {
    return super.get(value, {})
  }
}
