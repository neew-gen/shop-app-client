<template>
  <div>
    <CategoriesList v-if="!loading" :data="data" />
    <CategoriesListSkeleton v-if="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFetch } from '@/api/fetch-api/useFetch'
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORIES_CATALOG_LIST } from '@/api/graphql-api/queries/categoryQueries'
import { CategoryType } from '@/types/category'
import CategoriesList from '@/components/public-layout/catalog/CategoriesList/CategoriesList.vue'
import CategoriesListSkeleton from '@/components/public-layout/catalog/CategoriesList/CategoriesListSkeleton.vue'

export default defineComponent({
  name: 'CatalogCategories',
  components: {
    CategoriesListSkeleton,
    CategoriesList,
  },
  setup() {
    const { data, loading } = useFetch<CategoryType[]>(
      'SWR',
      'CatalogCategories',
      GraphqlApi.fetchAll,
      [GET_CATEGORIES_CATALOG_LIST],
    )
    return { data, loading }
  },
})
</script>

<style lang="scss" scoped></style>
