<template>
  <div>
    <ProductsList v-if="!loading" :data="data" />
    <ProductsListSkeleton v-if="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useFetch } from '@/api/fetch-api/useFetch'
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { GET_PRODUCTS_CATALOG_LIST_BY_CATEGORY_ID } from '@/api/graphql-api/queries/productQueries'
import ProductsList from '@/components/public-layout/catalog/ProductsList/ProductsList.vue'
import ProductsListSkeleton from '@/components/public-layout/catalog/ProductsList/ProductsListSkeleton.vue'
import { ProductType } from '@/types/product'

export default defineComponent({
  name: 'CatalogProducts',
  props: {
    categoryId: {
      type: String,
      required: true,
    },
  },
  components: {
    ProductsList,
    ProductsListSkeleton,
  },
  setup(props) {
    const { data, loading } = useFetch<ProductType[]>(
      'SWR',
      `/catalog-products-${props.categoryId}`,
      () =>
        GraphqlApi.fetchBy(GET_PRODUCTS_CATALOG_LIST_BY_CATEGORY_ID, {
          categoryId: props.categoryId,
        }),
    )
    return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
