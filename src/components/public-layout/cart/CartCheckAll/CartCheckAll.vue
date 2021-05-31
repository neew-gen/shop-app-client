<template>
  <div class="cart-check-all">
    <MDBCheckbox
      :modelValue="isAllChecked"
      @change="changeCheckAll"
      :disabled="isEmptyCart"
    />
    <MDBBtn
      color="danger"
      @click="deleteSelected"
      :disabled="!isHaveCheckedInCart"
    >
      Delete selected
    </MDBBtn>
  </div>
  <div class="cart-check-all-fake" />
</template>

<script lang="ts">
import { MDBBtn, MDBCheckbox } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import CartService from '@/services/CartService/CartService'

export default defineComponent({
  name: 'CartCheckAll',
  components: {
    MDBCheckbox,
    MDBBtn,
  },
  setup() {
    const isEmptyCart = CartService.getIsEmptyCart()
    const isHaveCheckedInCart = CartService.getIsHaveCheckedInCart()
    const isAllChecked = CartService.getIsAllChecked()
    // const isAllChecked: WritableComputedRef<boolean> = computed({
    //   get(): boolean {
    //     if (props.data.length === 0) return false
    //     return !props.data.some((p) => !p.checked)
    //   },
    //   set(newValue: boolean): void {
    //     store.dispatch('updateAllChecked', newValue)
    //   },
    // })
    const changeCheckAll = (): void => {
      CartService.setAllChecked()
    }
    const deleteSelected = (): void => {
      CartService.deleteSelectedCartItems()
    }
    // return { isAllChecked, deleteSelected }
    return {
      isEmptyCart,
      isHaveCheckedInCart,
      isAllChecked,
      changeCheckAll,
      deleteSelected,
    }
  },
})
</script>

<style scoped lang="scss">
.cart-check-all {
  position: fixed;
  z-index: 2;
  left: 0;
  width: 100%;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.cart-check-all-fake {
  padding-bottom: 47px;
}
</style>
