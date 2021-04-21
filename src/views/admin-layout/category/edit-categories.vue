<template>
  <MDBContainer>
    <MDBRow v-if="!loading">
      <MDBCol
        col="12"
        v-if="!loading && data && data.length === 0"
        class="d-flex justify-content-center pt-2"
      >
        No categories yet. You can&thinsp;
        <router-link :to="{ name: 'create-category' }">create one</router-link>.
      </MDBCol>
      <MDBCol v-else>
        <MDBListGroup>
          <EditCategoriesItem
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
import { defineComponent } from 'vue'

import { awaitUseFetch, useFetch } from '@/api/fetch-api/useFetch'
import { graphqlFetch } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORIES_EDITLIST } from '@/api/graphql-api/queries/categoryQueries'
import EditCategoriesItem from '@/components/admin-layout/category/edit-categories/EditCategoriesItem.vue'
import Spinner from '@/components/Spinner.vue'
import { eventBus } from '@/helpers/EventBus'
import { ProductEditItem } from '@/types/product'

export default defineComponent({
  name: 'edit-categories',
  components: {
    EditCategoriesItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBListGroup,
    Spinner,
  },
  setup() {
    const { data, loading } = useFetch<ProductEditItem[]>(
      'SWR',
      '/categories-edit-list',
      () => graphqlFetch(GET_CATEGORIES_EDITLIST),
    )

    async function dataLoader(): Promise<void> {
      loading.value = true
      data.value = await awaitUseFetch<ProductEditItem[]>(
        'SWR',
        '/products-edit-list',
        () => graphqlFetch(GET_CATEGORIES_EDITLIST),
      )
      loading.value = false
    }

    eventBus.subscribe('edit-categories-update', async () => {
      await dataLoader()
    })

    return { data, loading }
  },
})
</script>

<style scoped lang="scss"></style>

<!--<template>-->
<!--  <EditList entity="category" />-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { defineComponent } from 'vue'-->

<!--import EditList from '@/components/admin-layout/EditList/EditList.vue'-->

<!--export default defineComponent({-->
<!--  name: 'EditCategoriesList',-->
<!--  components: { EditList },-->
<!--})-->
<!--</script>-->

<!--<style scoped lang="scss"></style>-->
