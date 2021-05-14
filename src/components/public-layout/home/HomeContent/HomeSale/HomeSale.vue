<template>
  <div class="HomeSale">
    data
    {{ loading }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { reactiveFetcher } from '@/api/fetch'
import { graphqlFetchBy } from '@/api/graphql-api/GraphqlApi'
import { GET_PRODUCTS_ORDER_BY } from '@/api/graphql-api/queries/productQueries'
import { ProductListItem } from '@/types/product'

export default defineComponent({
  name: 'HomeSale',
  setup() {
    const { data, loading } = reactiveFetcher<ProductListItem[]>(
      'NF',
      `/home-products-sale`,
      () =>
        graphqlFetchBy(GET_PRODUCTS_ORDER_BY, {
          orderBy: 'discount.percentage',
          orderParam: 'ASC',
        }),
    )
    return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
