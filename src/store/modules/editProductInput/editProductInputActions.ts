import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Actions } from '@/types/store/actions'

export type EditProductInputActions = {
  updateEditProductCategoryId: [string, void]
  updateEditProductAmount: [number, void]
  updateEditProductShow: [boolean, void]
  updateEditProductName: [string, void]
  updateEditProductPrice: [number, void]
  addEditProductImage: [ProductImagesItem, void]
  updateEditProductImage: [ProductImagesItem, void]
  deleteEditProductImage: [string, void]
  updateEditProductDescription: [string, void]
  updateEditProductDiscount: [null | ProductDiscountInput, void]
  clearEditProduct: [void, void]
}

export const editProductInputActions: Actions<EditProductInputActions> = {
  updateEditProductCategoryId({ commit }, newCategoryId) {
    commit('updateProductCategoryId', newCategoryId)
  },
  updateEditProductAmount({ commit }, newAmount) {
    commit('updateProductAmount', newAmount)
  },
  updateEditProductShow({ commit }, newShow) {
    commit('updateProductShow', newShow)
  },
  updateEditProductName({ commit }, newName) {
    commit('updateProductName', newName)
  },
  updateEditProductPrice({ commit }, newPrice) {
    commit('updateProductPrice', newPrice)
  },
  addEditProductImage({ commit, state }, newImage) {
    // TODO change here!
    // commit('addProductImage', newImagesValue)
  },
  updateEditProductImage({ commit }, imagesItem) {
    commit('updateProductImage', imagesItem)
  },
  deleteEditProductImage({ commit }, id) {
    // TODO change here!
    // const newImagesValue = deleteFromLocalArrayItem<ProductImagesItem>(
    //   'createProductImages',
    //   id,
    // )
    // if (!newImagesValue) return
    // commit('deleteProductImage', newImagesValue)
  },
  updateEditProductDescription({ commit }, newDescription) {
    commit('updateProductDescription', newDescription)
  },
  updateEditProductDiscount({ commit }, discount) {
    commit('updateProductDiscount', discount)
  },
  clearEditProduct({ commit }) {
    commit('updateProductCategoryId', '')
    commit('updateProductAmount', 0)
    commit('updateProductShow', true)
    commit('updateProductName', '')
    commit('updateProductPrice', 0)
    commit('addProductImage', [])
    commit('updateProductDescription', '')
    commit('updateProductDiscount', null)
  },
}
