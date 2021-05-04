import { ActionContext, CommitOptions } from 'vuex'

import { MutationPayload } from '@/store'
// import { MutationPayload as cartMutationPayload } from '@/store/modules/cart'
// import { MutationPayload as userMutationPayload } from '@/store/modules/user'
// import { MutationPayload as variablesMutationPayload } from '@/store/modules/variables'
import { State } from '@/types/store'

// type MutationPayload = variablesMutationPayload &
//   cartMutationPayload &
//   userMutationPayload

export type Actions<T> = {
  [Property in keyof T]: (
    augContext: AugmentedActionContext,
    payload: T[Property][0],
  ) => T[Property][1]
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions,
  ): void
} & Omit<ActionContext<State, State>, 'commit'>
