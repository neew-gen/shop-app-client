import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'
import { State } from '@/store'
import { MutationPayload } from '@/types/store/mutations'
import { ActionsPayload } from '@/types/store/actions'
import { Getters } from '@/types/store/getters'

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void
} & {
  dispatch<K extends keyof ActionsPayload>(
    key: K,
    payload?: ActionsPayload[K][0],
    options?: DispatchOptions
  ): ActionsPayload[K][1]
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
