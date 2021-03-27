import { State } from '@/types/store/getters'

export type Mutations<T> = {
  [Property in keyof T]: (state: State, payload: T[Property]) => void
}
