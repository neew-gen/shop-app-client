import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'

import { State } from '@/store'
import { Getters, MutationsPayload } from '@/store'
import { ActionsPayload } from '@/store'

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof MutationsPayload>(
    key: K,
    payload: MutationsPayload[K],
    options?: CommitOptions,
  ): void
} & {
  dispatch<K extends keyof ActionsPayload>(
    key: K,
    payload: ActionsPayload[K][0],
    options?: DispatchOptions,
  ): ActionsPayload[K][1]
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
