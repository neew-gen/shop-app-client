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
import { PropType, defineComponent } from 'vue'
import { MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { ProductType } from '@/types/product'
import ProductsListItem from '@/components/public-layout/catalog/ProductsList/ProductsListItem.vue'

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
