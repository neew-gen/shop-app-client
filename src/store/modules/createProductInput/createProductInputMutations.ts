import { MutationTree } from 'vuex'

import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

export type CreateProductInputMutations = {
  updateProductCategoryId: string
  updateProductAmount: number
  updateProductShow: boolean
  updateProductName: string
  updateProductPrice: number
  addProductImage: ProductImagesItem[]
  updateProductImage: ProductImagesItem
  deleteProductImage: ProductImagesItem[]
  updateProductDescription: string
  updateProductDiscount: null | ProductDiscountInput
  updateProductInputShow: { inputName: string; newStatus: boolean }
}

export const createProductInputMutations: MutationTree<State> &
  Mutations<CreateProductInputMutations> = {
  updateProductCategoryId({ inputs }, newCategoryId) {
    inputs.productInput.categoryId = newCategoryId
  },
  updateProductAmount({ inputs }, newAmount) {
    inputs.productInput.amount = newAmount
  },
  updateProductShow({ inputs }, newShow) {
    inputs.productInput.show = newShow
  },
  updateProductName({ inputs }, newName) {
    inputs.productInput.productData.name = newName
  },
  updateProductPrice({ inputs }, newPrice) {
    inputs.productInput.productData.price = newPrice
  },
  addProductImage({ inputs }, newImages) {
    inputs.productInput.productData.images = newImages
  },
  updateProductImage({ inputs }, imagesItem) {
    const updatingImage = inputs.productInput.productData.images.filter(
      (i: ProductImagesItem) => i.id === imagesItem.id,
    )[0]
    updatingImage.imgUrl = imagesItem.imgUrl
  },
  deleteProductImage({ inputs }, newImages) {
    inputs.productInput.productData.images = newImages
  },
  updateProductDescription({ inputs }, newDescription) {
    inputs.productInput.productData.description = newDescription
  },
  updateProductDiscount({ inputs }, discount) {
    if (!discount) {
      inputs.productInput.productData.discount = false
      return
    }
    if (!inputs.productInput.productData.discount) {
      inputs.productInput.productData.discount = {}
    }
    let prop: keyof ProductDiscountInput
    for (prop in discount) {
      inputs.productInput.productData.discount[prop] = discount[prop]
    }
  },
  updateProductInputShow({ inputs }, showPayload) {
    const { inputName, newStatus } = showPayload
    inputs.productInput.show[inputName] = newStatus
  },
}
