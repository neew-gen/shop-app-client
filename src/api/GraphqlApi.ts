import { Mixin } from 'ts-mixer'
import { DocumentNode } from '@apollo/client'
import { apollo } from '@/api/apollo'
import { ProductApi } from '@/api/modules/ProductApi'
import { CategoryApi } from '@/api/modules/CategoryApi'
import { SwipeApi } from '@/api/modules/SwipeApi'

export class GraphqlApi extends Mixin(ProductApi, CategoryApi, SwipeApi) {
  static async fetchAll<T>(query: DocumentNode): Promise<T[]> {
    const res = await apollo.query({
      query: query
    })
    // We get an object with a field that contains data. We need to extract it
    const toValues: Array<T[]> = Object.values(res.data)
    if (toValues.length > 1) console.error('We got more than 1 value')
    return toValues[0]
  }

  static async fetchById<T>(query: DocumentNode, id: string): Promise<T> {
    const res = await apollo.query({
      query: query,
      variables: { id }
    })
    // We get an object with a field that contains data. We need to extract it
    const toValues: T[] = Object.values(res.data)
    if (toValues.length > 1) console.error('We got more than 1 value')
    return toValues[0]
  }
}
