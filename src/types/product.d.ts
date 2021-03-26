export type ProductType = {
  category: string
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
  category: string
}

export type ProductUpdateInput = {
  name?: string
  imgUrl?: string
  price?: string
  description?: string
  category?: string
}
