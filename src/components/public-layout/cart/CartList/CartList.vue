<template>
  <MDBListGroup>
    <CartListItem v-for="(item, index) in data" :key="index" :data="item" />
  </MDBListGroup>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { ProductCartItem } from '@/types/product'
import CartListItem from '@/components/public-layout/cart/CartList/CartItem/CartItem.vue'

export default defineComponent({
  name: 'CartList',
  props: {
    data: {
      type: Array as PropType<ProductCartItem[]>,
    },
  },
  components: {
    CartListItem,
    MDBListGroup,
  },
})
</script>

<style scoped lang="scss"></style>
