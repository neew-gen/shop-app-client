<template>
  <MDBListGroup flush class="py-2">
    <HomeMenuItem
      item-text="Sale"
      icon-name="percent"
      animation-name="red-spark"
      sort-parameter="sale-products"
    />
    <HomeMenuItem
      item-text="New"
      icon-name="fire"
      animation-name="blue-opacity"
      sort-parameter="new-products"
    />
  </MDBListGroup>
</template>

<script lang="ts">
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import HomeMenuItem from '@/components/public-layout/home/HomeMenu/HomeMenuItem.vue'

// import { reactiveFetcher } from '@/services/FetchService/FetchService'
// import { graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
// import { GET_PRODUCTS_ORDER_BY } from '@/services/GraphqlService/queries/productQueries'
// import { ProductListItem } from '@/types/product'

export default defineComponent({
  name: 'HomeMenu',
  components: {
    HomeMenuItem,
    MDBListGroup,
  },
  setup() {
    // const { data, loading } = reactiveFetcher<ProductListItem[]>(
    //   'NF',
    //   `/home-products-sale`,
    //   () =>
    //     graphqlFetchBy(GET_PRODUCTS_ORDER_BY, {
    //       orderBy: 'discount.percentage',
    //       orderParam: 'ASC',
    //     }),
    // )
    // return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
