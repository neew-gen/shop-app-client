import { apollo } from '@/api/apollo'
import { CategoryCreateInput, CategoryUpdateInput } from '@/types/category'
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY
} from '@/api/queries/categoryQueries'

export class CategoryApi {
  // Method creates a new category and returns id.
  static async createCategory(input: CategoryCreateInput): Promise<string> {
    input.id = new Date().valueOf().toString()
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
}
