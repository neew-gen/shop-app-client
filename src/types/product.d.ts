// product type
export type Product = {
  _id: string
  createdAt: Date
  categoryId: string
  count: number
  productData: ProductData
}
export type ProductData = {
  name: string
  price: number
  images: ProductImagesItem[]
  description: string
  discount: null | ProductDiscount
}
export type ProductImagesItem = {
  id: string
  imgUrl: string
}
export type ProductDiscount = {
  percentage: number
  endsAt: null | Date
}

// product create input
export type CreateProductInput = {
  categoryId?: string
  amount: number
  show: boolean
  productData: ProductData
}
export type ProductDiscountInput = {
  percentage?: number
  endsAt?: null | Date
}

// product list item
export type ProductListItem = {
  _id: string
  productData: ProductListItemData
}
export type ProductListItemData = {
  name: string
  price: number
  images: ProductImagesItem[]
  discount: null | ProductDiscountPercentage
}
// product search result
export type ProductSearchItem = {
  _id: string
  productData: ProductSearchItemData
}
export type ProductSearchItemData = {
  name: string
  description: string
  images: ProductImagesItem[]
}

export type ProductDiscountPercentage = {
  percentage: number
}

export type ProductCartItem = {
  _id: string
  amount: number
  checked: boolean
  productData: {
    name: string
    price: number
    images: ProductImagesItem[]
    discount: null | ProductDiscountPercentage
  }
}

export type ProductUpdateInput = {
  name?: string
  imgUrl?: string
  price?: number
  description?: string
  categoryId?: string
}

export type ProductEditItem = {
  _id: string
  categoryId: string
  productData: {
    name: string
    images: ProductImagesItem
  }
}

export type CreateProductGraphqlVariable = {
  createProduct: CreateProductInput
}
// order object for filter
export type ProductOrder = {
  name: string
  condition: {
    [key: string]: string
  }
}
