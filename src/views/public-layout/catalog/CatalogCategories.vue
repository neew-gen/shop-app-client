<template>
  <div>
    <CategoriesList v-if="!loading" :data="data" />
    <CategoriesListSkeleton v-if="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { reactiveFetcher } from '@/api/fetch'
import { graphqlFetch } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORIES_CATALOG_LIST } from '@/api/graphql-api/queries/categoryQueries'
import CategoriesList from '@/components/public-layout/catalog/CategoriesList/CategoriesList.vue'
import CategoriesListSkeleton from '@/components/public-layout/catalog/CategoriesList/CategoriesListSkeleton.vue'
import { CategoryType } from '@/types/category'

export default defineComponent({
  name: 'CatalogCategories',
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
