export type ProductType = {
  categoryId: string
  description: string
  id: string
  imgUrl: string
  name: string
  price: string
  __typename?: string
}

export type ProductCreateInput = {
  id: string
  name: string
  imgUrl: string
  price: string
  description: string
  categoryId: string
}

export type ProductUpdateInput = {
  name?: string
  imgUrl?: string
  price?: string
  description?: string
  categoryId?: string
}
