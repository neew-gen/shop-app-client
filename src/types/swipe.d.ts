export type SwipeData = {
  imgUrl: string
  title: string
  text: string
}

export type SwipeType = {
  id: string
  swipeIndex?: number
  swipeData: SwipeData
}

export type UpdateSwipeInput = {
  swipeData: SwipeData
}

export type UpdateIndexInput = {
  id: string
  swipeIndex: number
}
