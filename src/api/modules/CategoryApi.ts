import { apollo } from '@/api/apollo'
import { CategoryUpdateInput } from '@/types/category'
import { UPDATE_CATEGORY } from '@/api/queries/categoryQueries'

export class CategoryApi {
  static async updateCategory(
    id: string,
    input: CategoryUpdateInput
  ): Promise<void> {
    const res = await apollo.mutate({
      mutation: UPDATE_CATEGORY,
      variables: { category: input, id }
    })
    console.log(res)
  }
}
