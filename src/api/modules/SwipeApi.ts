import { apollo } from '@/api/apollo'
import { SwipeData, UpdateIndexInput, UpdateSwipeInput } from '@/types/swipe'
import {
  CREATE_SWIPE,
  DELETE_SWIPE,
  UPDATE_INDEX,
  UPDATE_SWIPE
} from '@/api/queries/swipeQueries'

export class SwipeApi {
  // Method creates a new swipe and returns id.
  static async createSwipe(input: SwipeData): Promise<string> {
    const id = 's' + new Date().valueOf().toString()
    const createSwipeInput = {
      id,
      swipeData: input
    }
    await apollo.mutate({
      mutation: CREATE_SWIPE,
      variables: { createSwipeInput }
    })
    return id
  }

  static async updateIndex(
    updateIndexInput: UpdateIndexInput[]
  ): Promise<void> {
    await apollo.mutate({
      mutation: UPDATE_INDEX,
      variables: { updateIndexInput }
    })
  }

  static async updateSwipe(
    id: string,
    updateSwipeInput: UpdateSwipeInput
  ): Promise<void> {
    await apollo.mutate({
      mutation: UPDATE_SWIPE,
      variables: { id, updateSwipeInput }
    })
  }

  static async deleteSwipe(id: string): Promise<void> {
    await apollo.mutate({
      mutation: DELETE_SWIPE,
      variables: { id }
    })
  }
}
