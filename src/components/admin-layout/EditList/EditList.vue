<template>
  <div v-if="!loading">
    <div v-if="entity === 'product'">
      <EditListFilter />
    </div>
    <div
      v-if="!loading && data.length === 0"
      class="d-flex justify-content-center pt-2"
    >
      No {{ placeholder }} yet. You can&thinsp;
      <router-link :to="{ name: pathTo }">create one</router-link>.
    </div>
    <MDBListGroup v-else>
      <EditListItem
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :entity="entity"
      />
    </MDBListGroup>
  </div>
  <Spinner v-if="loading" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { EditListType } from '@/types'
import EditListItem from '@/components/admin-layout/EditList/EditListItem.vue'
import EditListFilter from '@/components/admin-layout/EditList/EditListFilter.vue'
import { useFetch } from '@/api/fetch-api/useFetch'
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORIES_EDITLIST } from '@/api/graphql-api/queries/categoryQueries'
import { GET_PRODUCTS_EDITLIST } from '@/api/graphql-api/queries/productQueries'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'EditList',
  props: {
    entity: {
      type: String,
      required: true,
    },
  },
  components: { Spinner, EditListFilter, EditListItem, MDBListGroup },
  setup(props) {
    const placeholder = ref('')
    const pathTo = ref('')

    if (props.entity === 'product') {
      placeholder.value = 'products'
      pathTo.value = 'CreateProduct'
      const { data, loading } = useFetch<EditListType[]>(
        'SWR',
        '/products-edit-list',
        GraphqlApi.fetchAll,
        [GET_PRODUCTS_EDITLIST],
      )
      return { data, loading, placeholder, pathTo }
    }

    if (props.entity === 'category') {
      placeholder.value = 'categories'
      pathTo.value = 'CreateCategory'
      const { data, loading } = useFetch<EditListType[]>(
        'SWR',
        '/categories-edit-list',
        GraphqlApi.fetchAll,
        [GET_CATEGORIES_EDITLIST],
      )
      return { data, loading, placeholder, pathTo }
    }
  },
})
</script>

<style scoped lang="scss"></style>
