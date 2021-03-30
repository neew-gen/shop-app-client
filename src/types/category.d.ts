export type CategoryCreateInput = {
  id: string
  name: string
  imgUrl: string
  isPublic: boolean
}

export type CategoryUpdateInput = {
  name?: string
  imgUrl?: string
  isPublic?: boolean
}

export type CategoryType = {
  id: string
  name: string
  imgUrl: string
  isPublic: boolean
  __typename?: string
}

export type CategoryDropdownType = {
  id: string
  name: string
  __typename?: string
}
