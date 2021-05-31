<template>
  <div class="cart-total-fake" />
  <div class="cart-total">
    <div class="cart-total__price">Total: {{ total.toFixed(2) }}&ensp;dol.</div>
    <div>
      <MDBBtn color="success">Purchase</MDBBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { MDBBtn } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import CartService from '@/services/CartService/CartService'

export default defineComponent({
  name: 'CartTotal',
  components: {
    MDBBtn,
  },
  setup() {
    const total = CartService.getTotalPrice()
    return { total }
  },
})
</script>

<style scoped lang="scss">
.cart-total {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  background: white;
  position: fixed;
  left: 0;
  bottom: 50px;
  z-index: 2;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  &__price {
    font-size: 1.1rem;
    font-weight: 600;
  }
}
.cart-total-fake {
  padding-top: 47px;
}
</style>
