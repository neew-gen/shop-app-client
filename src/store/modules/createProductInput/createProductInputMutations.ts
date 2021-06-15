import { MutationTree } from 'vuex'

import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

export type CreateProductInputMutations = {
  updateCreateProductCategoryId: string
  updateCreateProductAmount: number
  updateCreateProductShow: boolean
  updateCreateProductName: string
  updateCreateProductPrice: number
  addCreateProductImage: ProductImagesItem[]
  updateCreateProductImage: ProductImagesItem
  deleteCreateProductImage: ProductImagesItem[]
  updateCreateProductDescription: string
  updateCreateProductDiscount: null | ProductDiscountInput
}

export const createProductInputMutations: MutationTree<State> &
  Mutations<CreateProductInputMutations> = {
  updateCreateProductCategoryId({ inputs }, newCategoryId) {
    inputs.createProductInput.categoryId = newCategoryId
  },
  updateCreateProductAmount({ inputs }, newAmount) {
    inputs.createProductInput.amount = newAmount
  },
  updateCreateProductShow({ inputs }, newShow) {
    inputs.createProductInput.show = newShow
  },
  updateCreateProductName({ inputs }, newName) {
    inputs.createProductInput.productData.name = newName
  },
  updateCreateProductPrice({ inputs }, newPrice) {
    inputs.createProductInput.productData.price = newPrice
  },
  addCreateProductImage({ inputs }, newImages) {
    inputs.createProductInput.productData.images = newImages
  },
  updateCreateProductImage({ inputs }, imagesItem) {
    const updatingImage = inputs.createProductInput.productData.images.filter(
      (i: ProductImagesItem) => i.id === imagesItem.id,
    )[0]
    updatingImage.imgUrl = imagesItem.imgUrl
  },
  deleteCreateProductImage({ inputs }, newImages) {
    inputs.createProductInput.productData.images = newImages
  },
  updateCreateProductDescription({ inputs }, newDescription) {
    inputs.createProductInput.productData.description = newDescription
  },
  updateCreateProductDiscount({ inputs }, discount) {
    if (!discount) {
      inputs.createProductInput.productData.discount = null
      return
    }
    if (!inputs.createProductInput.productData.discount) {
      inputs.createProductInput.productData.discount = {}
    }
    let prop: keyof ProductDiscountInput
    for (prop in discount) {
      inputs.createProductInput.productData.discount[prop] = discount[prop]
    }
  },
}
