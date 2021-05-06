export type ProductType = {
  categoryId: string
  description: string
  id: string
  imgUrl: string
  name: string
  price: number
}

export type ProductData = {
  name: string
  price: number
  images: ProductImagesItem[]
  description: string
  discount: false | ProductDiscount
}

export type ProductImagesItem = {
  id: string
  imgUrl: string
}

export type ProductDiscount = {
  percentage: number
  endsAt: false | Date
}

export type ProductCreateInput = {
  categoryId?: string
  count: number
  show: boolean
  productData: ProductData
}
export type ProductDiscountInput = {
  percentage?: number
  endsAt?: false | Date
}

export type ProductUpdateInput = {
  name?: string
  imgUrl?: string
  price?: number
  description?: string
  categoryId?: string
}

export type ProductCartItem = {
  id: string
  name: string
  imgUrl: string
  price: number
  value: number
  checked: boolean
}

export type ProductEditItem = {
  id: string
  imgUrl: string
  name: string
  categoryId: string
}
