<template>
  <EditProductsFilter
    @updateCategoryDropdown="updateCategoryId"
    @updateOrderDropdown="updateOrder"
  />
  <MDBCol
    col="12"
    v-if="!loading && data && data.length === 0"
    class="d-flex justify-content-center pt-2"
  >
    No products yet. You can&thinsp;
    <router-link :to="{ name: 'create-product' }">create one</router-link>.
  </MDBCol>
  <MDBCol v-if="!loading && data">
    <MDBListGroup>
      <EditProductsItem
        v-for="item in data"
        :key="item._id"
        :data="item"
        @deleteProduct="deleteProduct"
      />
    </MDBListGroup>
  </MDBCol>
  <Spinner v-if="loading" />
</template>

<script lang="ts">
import { MDBCol, MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent, Ref, ref } from 'vue'

import EditProductsFilter from '@/components/admin-layout/product/edit-products/EditProductsFilter.vue'
import EditProductsItem from '@/components/admin-layout/product/edit-products/EditProductsItem.vue'
import Spinner from '@/components/Spinner.vue'
import { awaitFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
import {
  GET_PRODUCTS_EDITLIST_BY_CATEGORY_ID,
  GET_PRODUCTS_EDITLIST_ORDER_BY,
} from '@/services/GraphqlService/queries/product/admin/productAdminQueriesGet'
import { ProductEditItem, ProductOrder } from '@/types/product'

export default defineComponent({
  name: 'edit-products',
  components: {
    EditProductsItem,
    MDBCol,
    MDBListGroup,
    EditProductsFilter,
    Spinner,
  },
  setup() {
    const data: Ref<ProductEditItem[] | undefined> = ref([])
    const loading = ref(false)
    const categoryId = ref('')
    const orderObj: Ref<ProductOrder | undefined> = ref()

    const updateCategoryId = (e: string): void => {
      categoryId.value = e
      dataLoader()
    }
    const updateOrder = (e: ProductOrder): void => {
      orderObj.value = e
      dataLoader()
    }
    const deleteProduct = (): void => {
      dataLoader()
    }

    async function dataLoader(): Promise<void> {
      loading.value = true
      if (!orderObj.value) return
      const orderBy = Object.keys(orderObj.value.condition)[0]
      const orderParam = orderObj.value.condition[orderBy]
      if (!categoryId.value) {
        data.value = await awaitFetcher<ProductEditItem[]>(
          'NF',
          `/products-edit-${orderBy}-${orderParam}`,
          () =>
            graphqlFetchBy(GET_PRODUCTS_EDITLIST_ORDER_BY, {
              orderBy,
              orderParam,
            }),
        )
        loading.value = false
      } else {
        data.value = await awaitFetcher<ProductEditItem[]>(
          'NF',
          `/products-edit-list-${categoryId.value}`,
          () =>
            graphqlFetchBy(GET_PRODUCTS_EDITLIST_BY_CATEGORY_ID, {
              categoryId: categoryId.value,
              sortBy: orderBy,
              sortParam: orderParam,
            }),
        )
      }
      loading.value = false
    }

    return { updateCategoryId, updateOrder, deleteProduct, data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
