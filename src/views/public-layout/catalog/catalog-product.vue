<template>
  <div>
    <ProductComponent v-if="!loading" :data="data" />
    <ProductSkeleton v-if="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { reactiveFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
import { GET_PRODUCT_BY_ID } from '@/services/GraphqlService/queries/productQueries'
import ProductComponent from '@/components/public-layout/catalog/Product/Product.vue'
import ProductSkeleton from '@/components/public-layout/catalog/Product/ProductSkeleton.vue'
import { Product } from '@/types/product'
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
