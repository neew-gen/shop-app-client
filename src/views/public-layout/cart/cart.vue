<template>
  <CartBreadcrumb />
  <MDBContainer>
    <MDBRow>
      <MDBCol class="cart-check-all-container">
        <CartCheckAll />
      </MDBCol>
      <MDBCol col="12">
        <CartList v-if="!isEmptyCart" />
        <div class="d-flex justify-content-center" v-if="isEmptyCart">
          <div>Cart is empty.</div>
        </div>
      </MDBCol>
      <MDBCol col="12" v-if="isHaveCheckedInCart">
        <CartTotal />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBCol, MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import CartCheckAll from '@/components/public-layout/cart/CartCheckAll/CartCheckAll.vue'
import CartList from '@/components/public-layout/cart/CartList/CartList.vue'
import CartTotal from '@/components/public-layout/cart/CartTotal/CartTotal.vue'
import CartBreadcrumb from '@/components/public-layout/PublicBreadcrumbs/CartBreadcrumb.vue'
import CartService from '@/services/CartService/CartService'

export default defineComponent({
  name: 'Cart',
  components: {
    CartCheckAll,
    CartTotal,
    CartList,
    CartBreadcrumb,
    MDBContainer,
    MDBRow,
    MDBCol,
  },
  setup() {
    const isEmptyCart = CartService.getIsEmptyCart()
    const isHaveCheckedInCart = CartService.getIsHaveCheckedInCart()
    return {
      isEmptyCart,
      isHaveCheckedInCart,
    }
  },
})
</script>

<style scoped lang="scss">
.cart-check-all-container {
  //position: relative;
}
</style>
