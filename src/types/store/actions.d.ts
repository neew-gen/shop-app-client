import { ActionContext, CommitOptions } from 'vuex'

import { MutationsPayload } from '@/store'
import { State } from '@/types/store'

export type Actions<T> = {
  [Property in keyof T]: (
    augContext: AugmentedActionContext,
    payload: T[Property][0],
  ) => T[Property][1]
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsPayload>(
    key: K,
    payload: MutationsPayload[K],
    options?: CommitOptions,
  ): void
} & Omit<ActionContext<State, State>, 'commit'>
