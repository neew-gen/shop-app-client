<template>
  <div>
    <ProductComponent v-if="!loading && data" :data="data" />
    <ProductSkeleton v-if="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ProductComponent from '@/components/public-layout/Product/Product.vue'
import ProductSkeleton from '@/components/public-layout/Product/ProductSkeleton.vue'
import { reactiveFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
import { Product } from '@/types/product'
import { GET_PRODUCT_BY_ID } from '@/services/GraphqlService/queries/product/public/productPublicQueriesGet'
export default defineComponent({
  name: 'CatalogProduct',
  props: {
    _id: {
      type: String,
      required: true,
    },
  },
  components: { ProductSkeleton, ProductComponent },
  setup(props) {
    const { data, loading } = reactiveFetcher<Product>(
      'SWR',
      `/catalog-product-${props._id}`,
      () => graphqlFetchBy(GET_PRODUCT_BY_ID, { _id: props._id }),
    )
    return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
