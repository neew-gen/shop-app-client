import { apollo } from '@/api/apollo'
import {
  CategoryCreateInput,
  CategoryDropdownType,
  CategoryUpdateInput
} from '@/types/category'
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES_DROPDOWN,
  UPDATE_CATEGORY
} from '@/api/queries/categoryQueries'
import { DocumentNode } from '@apollo/client'

export class CategoryApi {
  // Method creates a new category and returns id.
  static async createCategory(input: CategoryCreateInput): Promise<string> {
    input.id = 'c' + new Date().valueOf().toString()
    await apollo.mutate({
      mutation: CREATE_CATEGORY,
      variables: { category: input }
    })
    return input.id
  }

  static async updateCategory(
    id: string,
    input: CategoryUpdateInput
  ): Promise<void> {
    const res = await apollo.mutate({
      mutation: UPDATE_CATEGORY,
      variables: { category: input, id }
    })
  }

  static async deleteCategory(id: string): Promise<void> {
    await apollo.mutate({
      mutation: DELETE_CATEGORY,
      variables: { id }
    })
  }

  static async fetchCategoryDropdown(): Promise<CategoryDropdownType[]> {
    const res = await apollo.query({
      query: GET_CATEGORIES_DROPDOWN
    })
    // We get an object with a field that contains data. We need to extract it
    const toValues: Array<CategoryDropdownType[]> = Object.values(res.data)
    if (toValues.length > 1) console.error('We got more than 1 value')
    return toValues[0]
  }
}
