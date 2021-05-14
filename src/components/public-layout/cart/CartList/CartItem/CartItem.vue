<template>
  <MDBListGroupItem class="cart-item-container" v-if="data">
    {{ data }}
    <div class="cart-item">
      <div class="cart-item__check">
        <MDBCheckbox v-model="checked" />
        <!--      </div>-->
        <!--      <div class="cart-item__image">-->
        <!--        <ProductImage-->
        <!--          height="60px"-->
        <!--          width="90px"-->
        <!--          :img-url="data.imgUrl"-->
        <!--          :name="data.name"-->
        <!--        />-->
        <!--      </div>-->
        <!--      <div class="cart-item__name">-->
        <!--        <div class="name-text">{{ data.name.slice(0, 25) }}</div>-->
        <!--      </div>-->
        <!--      <div class="cart-item__price">-->
        <!--        <div class="price-text">{{ data.price }}&ensp;dol.</div>-->
        <!--      </div>-->
        <!--      <div class="cart-item__value">-->
        <!--        <CartItemValue :id="data.id" :value="data.value" />-->
      </div>
    </div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBCheckbox, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { computed, defineComponent, PropType, WritableComputedRef } from 'vue'

import CartApi from '@/api/cart/CartApi'
import CartItemValue from '@/components/public-layout/cart/CartList/CartItem/CartItemValue.vue'
import ProductImage from '@/components/public-layout/catalog/Product/ProductImage.vue'
import { store } from '@/store'
import { ProductCartItem } from '@/types/product'

export default defineComponent({
  name: 'CartItem',
  props: {
    data: {
      type: Object as PropType<ProductCartItem>,
    },
  },
  components: {
    // CartItemValue,
    // ProductImage,
    MDBListGroupItem,
    MDBCheckbox,
  },
  setup(props) {
    const checked: WritableComputedRef<boolean> = computed({
      get(): boolean {
        if (!props.data) return false
        return props.data.checked
      },
      set(newValue: boolean): void {
        if (!props.data) return
        CartApi.updateCartItem(props.data._id, { checked: newValue })
        // store.dispatch('updateCartItem', {
        //   id: props.data._id,
        //   propName: 'checked',
        //   propValue: newValue,
        // })
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
