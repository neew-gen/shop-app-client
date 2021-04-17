<template>
  <CartBreadcrumb />
  <MDBContainer>
    <MDBRow>
      <MDBCol class="cart-check-all-container">
        <CartCheckAll :data="data" :have-checked="haveChecked" />
      </MDBCol>
      <MDBCol col="12">
        <CartList :data="data" />
        <div class="d-flex justify-content-center" v-if="data.length === 0">
          <div>Cart is empty.</div>
        </div>
      </MDBCol>
      <MDBCol col="12" v-if="haveChecked">
        <CartTotal />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit'
import CartBreadcrumb from '@/components/public-layout/PublicBreadcrumbs/CartBreadcrumb.vue'
import { ProductCartItem } from '@/types/product'
import CartList from '@/components/public-layout/cart/CartList/CartList.vue'
import { store } from '@/store'
import CartTotal from '@/components/public-layout/cart/CartTotal/CartTotal.vue'
import CartCheckAll from '@/components/public-layout/cart/CartCheckAll/CartCheckAll.vue'

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
    store.dispatch('fetchCartList')
    const data: ComputedRef<ProductCartItem[]> = computed(() => {
      return store.getters.getCartList
    })
    const haveChecked: ComputedRef<boolean> = computed(() => {
      return data.value.some((p) => p.checked)
    })
    return {
      data,
      haveChecked,
    }
  },
})
</script>

<style scoped lang="scss">
.cart-check-all-container {
  //position: relative;
}
</style>
