export const initialState = {
  product: {
    initialEditList: [],
    editList: []
  },
  category: {
    editList: []
  },
  swipe: {
    editList: [],
    homeSwiper: [],
    defaultSwipe: [
      {
        id: 0,
        swipeIndex: 0,
        swipeData: {
          imgUrl: 'https://i.stack.imgur.com/y9DpT.jpg',
          title: 'Default Swipe',
          text: 'Please create a swipe.'
        }
      }
    ]
  }
}
