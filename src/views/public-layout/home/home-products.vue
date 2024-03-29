<template>
  <ProductsList v-if="!loading" :data="data" router-mode="home-products" />
  <ProductsListSkeleton v-if="loading" />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

import ProductsList from '@/components/public-layout/ProductsList/ProductsList.vue'
import ProductsListSkeleton from '@/components/public-layout/ProductsList/ProductsListSkeleton.vue'
import { reactiveFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
import { ProductListItem } from '@/types/product'
import { GET_PRODUCTS_ORDER_BY } from '@/services/GraphqlService/queries/product/public/productPublicQueriesGet'

export default defineComponent({
  name: 'home-products',
  components: {
    ProductsList,
    ProductsListSkeleton,
  },
  props: {
    sortParameter: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const orderBy: ComputedRef<string> = computed(() => {
      if (props.sortParameter === 'sale-products') return 'productData.discount.percentage'
      if (props.sortParameter === 'new-products') return 'createdAt'
      return ''
    })
    const { data, loading } = reactiveFetcher<ProductListItem[]>(
      'NF',
      `/home-products-sale`,
      () =>
        graphqlFetchBy(GET_PRODUCTS_ORDER_BY, {
          orderBy: orderBy.value,
          orderParam: 'ASC',
        }),
    )
    return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
