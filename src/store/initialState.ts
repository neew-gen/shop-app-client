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
    createProductInput: {
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
    editProductInput: {
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
    editProductInputDefault: {},
  },
  search: { searchResult: [], searchLoading: false },
}
