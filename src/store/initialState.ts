export const initialState = {
  variables: {
    fullSizeSearch: false,
    categoryDropdown: undefined,
  },
  cart: {
    cartList: [],
  },
  user: {
    userData: {},
  },
  inputs: {
    productInput: {
      categoryId: '',
      amount: 0,
      show: true,
      productData: {
        name: '',
        price: 0,
        images: [],
        description: '',
        discount: null,
      },
    },
  },
  search: { searchResult: [], searchLoading: false },
}
