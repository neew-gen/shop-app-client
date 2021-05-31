<template>
  <MDBListGroup v-if="cartData">
    <CartListItem v-for="item in cartData" :key="item._id" :data="item" />
  </MDBListGroup>
</template>

<script lang="ts">
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import CartListItem from '@/components/public-layout/cart/CartList/CartItem/CartItem.vue'
import CartService from '@/services/CartService/CartService'

export default defineComponent({
  name: 'CartList',
  components: {
    CartListItem,
    MDBListGroup,
  },
  setup() {
    const cartData = CartService.getCartData()
    CartService.updateCartProductsData()
    return {
      cartData,
    }
  },
})
</script>

<style scoped lang="scss"></style>
