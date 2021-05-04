<template>
  <MDBContainer>
    <MDBRow>
      <ProductsListItem
        v-for="(item, index) in data"
        :key="index"
        :product="item"
      />
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'

import ProductsListItem from '@/components/public-layout/catalog/ProductsList/ProductsListItem.vue'
import { ProductType } from '@/types/product'

export default defineComponent({
  name: 'ProductsList',
  props: {
    data: {
      type: Array as PropType<ProductType[]>,
    },
  },
  components: {
    ProductsListItem,
    MDBContainer,
    MDBRow,
  },
})
</script>

<style scoped lang="scss"></style>
