<template>
  <div>
    <div>
      <CategoriesList v-if="!loading" :data="data" />
      <CategoriesListFallback v-if="loading" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFetch } from '@/api/fetch-api/useFetch'
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORIES_CATALOG_LIST } from '@/api/graphql-api/queries/categoryQueries'
import { CategoryType } from '@/types/category'
import CategoriesList from '@/components/public-layout/catalog/CategoriesList/CategoriesList.vue'
import CategoriesListFallback from '@/components/public-layout/catalog/CategoriesList/CategoriesListFallback.vue'

export default defineComponent({
  name: 'CatalogCategories',
  components: {
    CategoriesListFallback,
    CategoriesList
  },
  setup() {
    const { data, loading } = useFetch<CategoryType[]>(
      'SWR',
      'CatalogCategories',
      GraphqlApi.fetchAll,
      GET_CATEGORIES_CATALOG_LIST
    )
    return { data, loading }
  }
})
</script>

<style lang="scss" scoped></style>
