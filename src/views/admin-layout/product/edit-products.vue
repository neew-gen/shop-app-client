<template>
  <MDBContainer>
    <MDBRow v-if="!loading">
      <MDBCol col="12">
        <EditProductsFilter />
      </MDBCol>
      <MDBCol
        col="12"
        v-if="!loading && data && data.length === 0"
        class="d-flex justify-content-center pt-2"
      >
        No products yet. You can&thinsp;
        <router-link :to="{ name: 'create-product' }">create one</router-link>.
      </MDBCol>
      <MDBCol v-else>
        <MDBListGroup>
          <EditProductsItem
            v-for="(item, index) in data"
            :key="index"
            :data="item"
          />
        </MDBListGroup>
      </MDBCol>
    </MDBRow>
    <MDBRow><Spinner v-if="loading" /></MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBCol, MDBContainer, MDBListGroup, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent, onUnmounted } from 'vue'

import { graphqlFetch, graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
import {
  GET_PRODUCTS_EDITLIST,
  GET_PRODUCTS_EDITLIST_BY_CATEGORY_ID,
} from '@/services/GraphqlService/queries/productQueries'
import EditProductsFilter from '@/components/admin-layout/product/edit-products/EditProductsFilter.vue'
import EditProductsItem from '@/components/admin-layout/product/edit-products/EditProductsItem.vue'
import Spinner from '@/components/Spinner.vue'
import { eventBus } from '@/helpers/EventBus'
import {
  awaitFetcher,
  reactiveFetcher,
} from '@/services/FetchService/FetchService'
import { useStore } from '@/store'
import { ProductEditItem } from '@/types/product'

export default defineComponent({
  name: 'edit-products',
  components: {
    EditProductsItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBListGroup,
    EditProductsFilter,
    Spinner,
  },
  setup() {
    const store = useStore()

    const { data, loading } = reactiveFetcher<ProductEditItem[]>(
      'NF',
      '/products-edit-list',
      () => graphqlFetch(GET_PRODUCTS_EDITLIST),
    )

    async function dataLoader(categoryId: string): Promise<void> {
      loading.value = true
      if (!categoryId) {
        data.value = await awaitFetcher<ProductEditItem[]>(
          'NF',
          '/products-edit-list',
          () => graphqlFetch(GET_PRODUCTS_EDITLIST),
        )
        loading.value = false
        return
      }
      data.value = await awaitFetcher<ProductEditItem[]>(
        'NF',
        `/products-edit-list-${categoryId}`,
        () =>
          graphqlFetchBy(GET_PRODUCTS_EDITLIST_BY_CATEGORY_ID, {
            categoryId: categoryId,
          }),
      )
      loading.value = false
    }

    eventBus.subscribe('edit-products-update', async () => {
      if (!store.getters.getCategoryDropdown) return
      await dataLoader(store.getters.getCategoryDropdown)
    })

    const unwatch = store.watch(
      () => store.getters.getCategoryDropdown,
      async (value) => {
        if (!value) return
        await dataLoader(value)
      },
    )

    onUnmounted(() => {
      unwatch()
      eventBus.unsubscribe('edit-products-update')
    })
    return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
