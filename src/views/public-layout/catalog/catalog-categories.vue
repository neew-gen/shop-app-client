<template>
  <div>
    <CategoriesList v-if="!loading" :data="data" />
    <CategoriesListSkeleton v-if="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { graphqlFetch } from '@/services/GraphqlService/GraphqlService'
import { GET_CATEGORIES_CATALOG_LIST } from '@/services/GraphqlService/queries/categoryQueries'
import CategoriesList from '@/components/public-layout/catalog/CategoriesList/CategoriesList.vue'
import CategoriesListSkeleton from '@/components/public-layout/catalog/CategoriesList/CategoriesListSkeleton.vue'
import { reactiveFetcher } from '@/services/FetchService/FetchService'
import { CategoryType } from '@/types/category'

export default defineComponent({
  name: 'catalog-categories',
  components: {
    CategoriesListSkeleton,
    CategoriesList,
  },
  setup() {
    const { data, loading } = reactiveFetcher<CategoryType[]>(
      'SWR',
      '/catalog-categories',
      () => graphqlFetch(GET_CATEGORIES_CATALOG_LIST),
    )
    return { data, loading }
  },
})
</script>

<style lang="scss" scoped></style>
