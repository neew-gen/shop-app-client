<template>
  <MDBListGroupItem class="cart-item-container" v-if="data">
    <div class="cart-item">
      <div class="cart-item__check">
        <MDBCheckbox v-model="checked" />
      </div>
      <div class="cart-item__image">
        <ImageContainer
          height="60px"
          width="90px"
          :img-url="data.imgUrl"
          :name="data.name"
        />
      </div>
      <div class="cart-item__name">
        <div class="name-text">{{ data.name.slice(0, 25) }}</div>
      </div>
      <div class="cart-item__price">
        <div class="price-text">{{ data.price }}&ensp;dol.</div>
      </div>
      <div class="cart-item__value">
        <CartItemValue :id="data.id" :value="data.value" />
      </div>
    </div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, WritableComputedRef } from 'vue'
import { MDBListGroupItem, MDBCheckbox } from 'mdb-vue-ui-kit'
import ImageContainer from '@/components/ImageContainer.vue'
import { ProductCartItem } from '@/types/product'
import { store } from '@/store'
import CartItemValue from '@/components/public-layout/cart/CartList/CartItem/CartItemValue.vue'

export default defineComponent({
  name: 'CartItem',
  props: {
    data: {
      type: Object as PropType<ProductCartItem>,
    },
  },
  components: {
    CartItemValue,
    ImageContainer,
    MDBListGroupItem,
    MDBCheckbox,
  },
  setup(props) {
    const checked: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return props.data!.checked
      },
      set(newValue: boolean): void {
        store.dispatch('updateCartItem', {
          id: props.data!.id,
          propName: 'checked',
          propValue: newValue,
        })
      },
    })
    return { checked }
  },
})
</script>

<style scoped lang="scss">
.cart-item-container {
  display: flex;
}
.cart-item {
  width: 100%;
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr;
  grid-template-rows: 1fr 50px;
  gap: 5px 20px;
  align-items: center;
  grid-template-areas:
    'check image . value'
    'check name name price';
  &__check {
    grid-area: check;
  }
  &__image {
    grid-area: image;
  }
  &__name {
    grid-area: name;
    overflow: hidden;
  }
  &__price {
    grid-area: price;
  }
  &__value {
    grid-area: value;
    justify-self: end;
  }
  .price-text {
    text-align: end;
    font-size: 1.1rem;
    font-weight: 600;
  }
}
</style>