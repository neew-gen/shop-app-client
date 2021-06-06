import {
  deleteFromLocalArrayItem,
  pushToLocalArrayItem,
  removeLocalItems,
  setLocalItem,
} from '@/services/LocalStorageService/LocalStorageService'
import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Actions } from '@/types/store/actions'

export type CreateProductInputActions = {
  updateCreateProductCategoryId: [string, void]
  updateCreateProductAmount: [number, void]
  updateCreateProductShow: [boolean, void]
  updateCreateProductName: [string, void]
  updateCreateProductPrice: [number, void]
  addCreateProductImage: [ProductImagesItem, void]
  updateCreateProductImage: [ProductImagesItem, void]
  deleteCreateProductImage: [string, void]
  updateCreateProductDescription: [string, void]
  updateCreateProductDiscount: [null | ProductDiscountInput, void]
  clearCreateProduct: [void, void]
}

export const createProductInputActions: Actions<CreateProductInputActions> = {
  updateCreateProductCategoryId({ commit }, newCategoryId) {
    setLocalItem('createCategoryId', newCategoryId)
    commit('updateProductCategoryId', newCategoryId)
  },
  updateCreateProductAmount({ commit }, newAmount) {
    setLocalItem('createProductAmount', newAmount)
    commit('updateProductAmount', newAmount)
  },
  updateCreateProductShow({ commit }, newShow) {
    setLocalItem('createProductShow', newShow)
    commit('updateProductShow', newShow)
  },
  updateCreateProductName({ commit }, newName) {
    setLocalItem('createProductName', newName)
    commit('updateProductName', newName)
  },
  updateCreateProductPrice({ commit }, newPrice) {
    setLocalItem('createProductPrice', newPrice)
    commit('updateProductPrice', newPrice)
  },
  addCreateProductImage({ commit }, newImage) {
    const newImagesValue = pushToLocalArrayItem<ProductImagesItem>(
      'createProductImages',
      newImage,
    )
    commit('addProductImage', newImagesValue)
  },
  updateCreateProductImage({ commit }, imagesItem) {
    setLocalItem('createProductImage', imagesItem)
    commit('updateProductImage', imagesItem)
  },
  deleteCreateProductImage({ commit }, id) {
    const newImagesValue = deleteFromLocalArrayItem<ProductImagesItem>(
      'createProductImages',
      id,
    )
    if (!newImagesValue) return
    commit('deleteProductImage', newImagesValue)
  },
  updateCreateProductDescription({ commit }, newDescription) {
    setLocalItem('createProductDescription', newDescription)
    commit('updateProductDescription', newDescription)
  },
  updateCreateProductDiscount({ commit }, discount) {
    setLocalItem('createProductDiscount', discount)
    commit('updateProductDiscount', discount)
  },
  clearCreateProduct({ commit }) {
    removeLocalItems([
      'createCategoryId',
      'createProductAmount',
      'createProductShow',
      'createProductName',
      'createProductPrice',
      'createProductImages',
      'createProductImage',
      'createProductDescription',
      'createProductDiscount',
    ])
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
