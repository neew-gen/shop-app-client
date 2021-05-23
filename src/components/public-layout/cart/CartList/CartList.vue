<template>
  <MDBListGroup v-if="cartData">
    <CartListItem v-for="item in cartData" :key="item._id" :data="item" />
  </MDBListGroup>
</template>

<script lang="ts">
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import CartApi from '@/api/cart/CartApi'
import CartListItem from '@/components/public-layout/cart/CartList/CartItem/CartItem.vue'

export default defineComponent({
  name: 'CartList',
  components: {
    CartListItem,
    MDBListGroup,
  },
  setup() {
    const cartData = CartApi.getCartData()
    CartApi.updateCartProductsData()
    return {
      cartData,
    }
  },
})
</script>

<style scoped lang="scss"></style>
