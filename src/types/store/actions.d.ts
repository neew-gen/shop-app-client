import { ActionContext, CommitOptions } from 'vuex'
import { State } from '@/types/store'
import { MutationPayload as productMutationPayload } from '@/store/modules/product'
import { MutationPayload as categoryMutationPayload } from '@/store/modules/category'
import { MutationPayload as swipeMutationPayload } from '@/store/modules/swipe'

type MutationPayload = productMutationPayload &
  categoryMutationPayload &
  swipeMutationPayload

export type Actions<T> = {
  [Property in keyof T]: (
    augContext: AugmentedActionContext,
    payload: T[Property][0]
  ) => T[Property][1]
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void
} & Omit<ActionContext<State, State>, 'commit'>
