import { GetterTree, MutationTree } from 'vuex'
import { Mutations } from '@/types/store/mutations'
import { Actions } from '@/types/store/actions'
import { State } from '@/types/store/state'
import { GraphqlApi } from '@/api/GraphqlApi'
import { SwipeData, SwipeType, UpdateIndexInput } from '@/types/swipe'
import { GET_SWIPES } from '@/api/queries/swipeQueries'
import _ from 'lodash'

/*
   ------------------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  fetchSwipeEditList: [void, void]
  createSwipe: [SwipeData, void]
  updateIndex: [UpdateIndexInput[], void]
  updateSwipe: [{ id: string; input: SwipeData }, void]
  deleteSwipe: [string, void]

  fetchSwipeHomeSwiper: [void, void]
}

export const actions: Actions<ActionsPayload> = {
  // --------------------------------- Admin Layout --------------------------------- //
  async fetchSwipeEditList({ commit, state }): Promise<void> {
    if (state.swipe.editList.length === 0) {
      const payload = await GraphqlApi.fetchAll<SwipeType>(GET_SWIPES)
      commit('fetchSwipeEditList', payload)
    }
  },
  async createSwipe({ commit, state }, createData): Promise<void> {
    const id = await GraphqlApi.createSwipe(createData)
    if (state.swipe.editList.length !== 0) {
      commit('createSwipe', { id, createData })
    }
  },
  async updateIndex({ commit, state }, dragData): Promise<void> {
    const updateIndexInput: UpdateIndexInput[] = []
    for (let i = 0; i < dragData.length; i++) {
      updateIndexInput.push({ id: dragData[i].id, swipeIndex: i })
    }
    await GraphqlApi.updateIndex(updateIndexInput)
    if (state.swipe.editList.length !== 0) {
      commit('updateIndex', updateIndexInput)
    }
  },
  async updateSwipe({ commit, state }, { id, input }): Promise<void> {
    const updateSwipeInput = { swipeData: { ...input } }
    await GraphqlApi.updateSwipe(id, updateSwipeInput)
    if (state.swipe.editList.length !== 0) {
      commit('updateSwipe', { id, updateData: input })
    }
  },
  async deleteSwipe({ commit, state }, id): Promise<void> {
    await GraphqlApi.deleteSwipe(id)
    if (state.swipe.editList.length !== 0) {
      commit('deleteSwipe', id)
    }
  },
  // --------------------------------- Public Layout -------------------------------- //
  async fetchSwipeHomeSwiper({ commit, state }): Promise<void> {
    if (state.swipe.homeSwiper.length === 0) {
      const payload = await GraphqlApi.fetchAll<SwipeType>(GET_SWIPES)
      commit('fetchSwipeHomeSwiper', payload)
    }
  }
}
/*
   ----------------------------- Mutations -----------------------------
 */
export type MutationPayload = {
  fetchSwipeEditList: SwipeType[]
  createSwipe: { id: string; createData: SwipeData }
  updateIndex: UpdateIndexInput[]
  updateSwipe: { id: string; updateData: SwipeData }
  deleteSwipe: string

  fetchSwipeHomeSwiper: SwipeType[]
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  // --------------------------------- Admin Layout --------------------------------- //
  fetchSwipeEditList({ swipe }, fetchedData) {
    swipe.editList = fetchedData
  },
  createSwipe({ swipe }, { id, createData }) {
    const newSwipe = {
      id,
      swipeData: createData
    }
    swipe.editList.push(newSwipe)
  },
  updateIndex({ swipe }, updateIndexInput) {
    for (const item of updateIndexInput) {
      const foundById = swipe.editList.filter(
        (s: SwipeType) => s.id === item.id
      )[0]
      foundById.swipeIndex = item.swipeIndex
    }
    swipe.editList = _.sortBy(swipe.editList, 'swipeIndex')
  },
  updateSwipe({ swipe }, { id, updateData }) {
    const [updatingSwipe] = swipe.editList.filter((s: SwipeType) => s.id === id)
    updatingSwipe.swipeData = updateData
  },
  deleteSwipe({ swipe }, id) {
    swipe.editList = swipe.editList.filter((s: SwipeType) => s.id !== id)
  },
  // --------------------------------- Public Layout -------------------------------- //
  fetchSwipeHomeSwiper({ swipe }, fetchedData) {
    if (fetchedData.length !== 0) {
      swipe.homeSwiper = fetchedData
    } else {
      swipe.homeSwiper = swipe.defaultSwipe
    }
  }
}

/*
   ------------------------------- Getters -------------------------------
 */
export type Getters = {
  getSwipeEditList(state: State): SwipeType[]

  getSwipeHomeSwiper(state: State): SwipeType[]
}

export const getters: GetterTree<State, State> & Getters = {
  // --------------------------------- Admin Layout --------------------------------- //
  getSwipeEditList: ({ swipe }) => {
    return swipe.editList
  },
  // --------------------------------- Public Layout -------------------------------- //
  getSwipeHomeSwiper: ({ swipe }) => {
    return swipe.homeSwiper
  }
}
