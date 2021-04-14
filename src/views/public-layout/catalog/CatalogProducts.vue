<template>
  <div>
    <Suspense>
      <template #default>
        <ProductsByCategory :categoryId="categoryId" />
      </template>
      <template #fallback>
        <ProductsByCategoryFallback />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductsByCategory from '@/components/public-layout/catalog/ProductsByCategory/ProductsByCategory.vue'
import ProductsByCategoryFallback from '@/components/public-layout/catalog/ProductsByCategory/ProductsByCategoryFallback.vue'

export default defineComponent({
  name: 'CatalogProducts',
  components: {
    ProductsByCategoryFallback,
    ProductsByCategory
  },
  props: {
    categoryId: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss"></style>
