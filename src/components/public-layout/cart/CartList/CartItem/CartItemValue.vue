<template>
  <div class="cart-item-value">
    <MDBBtn
      class="p-2"
      color="light"
      size="sm"
      :disabled="value < 2"
      @click="decreaseValue"
    >
      <MDBIcon icon="minus" iconStyle="fas" size="sm" />
    </MDBBtn>
    <div class="value">{{ value }}</div>
    <MDBBtn class="p-2" color="light" size="sm" @click="increaseValue">
      <MDBIcon icon="plus" iconStyle="fas" size="sm" />
    </MDBBtn>
  </div>
</template>

<script lang="ts">
import { MDBBtn, MDBIcon } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import { store } from '@/store'

export default defineComponent({
  name: 'CartItemValue',
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  components: {
    MDBBtn,
    MDBIcon,
  },
  setup(props) {
    const decreaseValue = (): void => {
      store.dispatch('updateCartItem', {
        id: props.id,
        propName: 'value',
        propValue: props.value - 1,
      })
    }
    const increaseValue = (): void => {
      store.dispatch('updateCartItem', {
        id: props.id,
        propName: 'value',
        propValue: props.value + 1,
      })
    }
    return { decreaseValue, increaseValue }
  },
})
</script>

<style scoped lang="scss">
.cart-item-value {
  display: flex;
  align-items: center;
}
.value {
  width: 25px;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}
</style>
