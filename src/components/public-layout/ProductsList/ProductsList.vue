<template>
  <ProductsListItem
    v-for="item in data"
    :key="item._id"
    :data="item"
    :router-mode="routerMode"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import ProductsListItem from '@/components/public-layout/ProductsList/ProductsListItem.vue'
import { ProductListItem } from '@/types/product'

export default defineComponent({
  name: 'ProductsList',
  props: {
    data: {
      type: Array as PropType<ProductListItem[]>,
      required: true,
    },
    routerMode: {
      type: String,
      required: true,
    },
  },
  components: {
    ProductsListItem,
  },
})
</script>

<style scoped lang="scss"></style>
