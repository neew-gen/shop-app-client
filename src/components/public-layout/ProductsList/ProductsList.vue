<template>
  <ProductsListItem v-for="item in data" :key="item._id" :data="item" />
</template>

<script lang="ts">
import { MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'

import ProductsListItem from '@/components/public-layout/ProductsList/ProductsListItem.vue'
import { ProductListItem } from '@/types/product'

export default defineComponent({
  name: 'ProductsList',
  props: {
    data: {
      type: Array as PropType<ProductListItem[]>,
    },
  },

  components: {
    ProductsListItem,
    // MDBContainer,
    // MDBRow,
  },
})
</script>

<style scoped lang="scss"></style>
