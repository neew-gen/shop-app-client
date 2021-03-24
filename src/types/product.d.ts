export type ProductInput = {
  id?: string | undefined
  name: string | undefined
  img: string | undefined
  price: string | undefined
  description: string | undefined
  category: string | undefined
}

export type EditListProduct = {
  id: string
  img: string
  name: string
  __typename: string
}

type ProductModelType = {
  $id: string
  $isPersisted: boolean
  category: string
  description: string
  id: string
  img: string
  name: string
  price: string
}
