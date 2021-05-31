<template>
  <MDBContainer>
    <MDBRow>
      <ProductsFilterMenu @updateFilter="updateFilter" />
      <ProductsList v-if="!loading" :data="data" />
      <ProductsListSkeleton v-if="loading" />
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { lowerCase } from 'lodash'
import { MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent, Ref, ref } from 'vue'

import ProductsFilterMenu from '@/components/public-layout/catalog/ProductsList/ProductsFilterMenu/ProductsFilterMenu.vue'
import ProductsList from '@/components/public-layout/catalog/ProductsList/ProductsList.vue'
import ProductsListSkeleton from '@/components/public-layout/catalog/ProductsList/ProductsListSkeleton.vue'
import { awaitFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
import { GET_PRODUCTS_CATALOG_LIST } from '@/services/GraphqlService/queries/productQueries'
import { ProductListItem } from '@/types/product'

export default defineComponent({
  name: 'catalog-products',
  props: {
    categoryId: {
      type: String,
      required: true,
    },
  },
  components: {
    MDBContainer,
    MDBRow,
    ProductsList,
    ProductsListSkeleton,
    ProductsFilterMenu,
  },
  setup(props) {
    const data: Ref<ProductListItem[] | undefined> = ref([])
    const loading: Ref<boolean> = ref(true)

    const updateFilter = async (e: any): Promise<void> => {
      loading.value = true
      const conditionKey = Object.keys(e.condition)[0]
      const cacheName = lowerCase(e.name).split(' ').join('-')
      data.value = await awaitFetcher<ProductListItem[]>(
        'NF',
        `/catalog-products-${props.categoryId}-${cacheName}`,
        () =>
          graphqlFetchBy(GET_PRODUCTS_CATALOG_LIST, {
            categoryId: props.categoryId,
            sortBy: conditionKey,
            sortParam: e.condition[conditionKey],
          }),
      )
      loading.value = false
    }
    return {
      data,
      loading,
      updateFilter,
    }
    // const { data, loading } = useFetch<Product[]>(
    //   'SWR',
    //   `/catalog-products-${props.categoryId}`,
    //   () =>
    //     graphqlFetchBy(GET_PRODUCTS_CATALOG_LIST_BY_CATEGORY_ID, {
    //       categoryId: props.categoryId,
    //     }),
    // )
    // return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
