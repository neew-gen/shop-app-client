<template>
  <div class="cart-check-all">
    <MDBCheckbox v-model="isAllChecked" :disabled="data.length === 0" />
    <MDBBtn color="danger" @click="deleteSelected" :disabled="!haveChecked">
      Delete selected
    </MDBBtn>
  </div>
  <div class="cart-check-all-fake" />
</template>

<script lang="ts">
import { MDBBtn, MDBCheckbox } from 'mdb-vue-ui-kit'
import { computed, defineComponent, PropType, WritableComputedRef } from 'vue'

import { store } from '@/store'
import { ProductCartItem } from '@/types/product'

export default defineComponent({
  name: 'CartCheckAll',
  props: {
    data: {
      type: Array as PropType<ProductCartItem[]>,
      required: true,
    },
    haveChecked: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    MDBCheckbox,
    MDBBtn,
  },
  setup(props) {
    const isAllChecked: WritableComputedRef<boolean> = computed({
      get(): boolean {
        if (props.data.length === 0) return false
        return !props.data.some((p) => !p.checked)
      },
      set(newValue: boolean): void {
        store.dispatch('updateAllChecked', newValue)
      },
    })
    const deleteSelected = (): void => {
      store.dispatch('deleteSelected')
    }
    return { isAllChecked, deleteSelected }
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
