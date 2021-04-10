<template>
  <MDBContainer>
    <MDBRow>
      <ProductsListItem
        v-for="(item, index) in products"
        :key="index"
        :product="item"
      />
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProductType } from '@/types/product'
import {
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-vue-ui-kit'
import ProductsListItem from '@/components/public-layout/catalog/ProductsList/ProductsListItem.vue'
export default defineComponent({
  name: 'ProductsList',
  components: {
    ProductsListItem,
    MDBContainer,
    MDBRow
  },
  props: {
    products: {
      type: Array as PropType<ProductType[]>,
      required: true
    }
  }
})
</script>

<style scoped lang="scss"></style>
