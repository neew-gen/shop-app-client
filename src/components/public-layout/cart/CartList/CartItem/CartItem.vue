<template>
  <MDBListGroupItem class="cart-item-container" v-if="data">
    <div class="cart-item">
      <div class="cart-item__check">
        <MDBCheckbox v-model="checked" />
      </div>
      <div class="cart-item__image">
        <ProductImage
          height="60px"
          width="90px"
          :name="data.productData.name"
          :images="[data.productData.images[0]]"
        />
      </div>
      <div class="cart-item__name">
        <div class="name-text">{{ data.productData.name }}</div>
      </div>
      <div class="cart-item__price">
        <ProductPrice
          :price="data.productData.price"
          :discount-percentage="
            data.productData.discount
              ? data.productData.discount.percentage
              : undefined
          "
          price-font-size="0.9rem"
          discount-font-size="1.1rem"
        />
      </div>
      <div class="cart-item__value">
        <CartItemAmount :_id="data._id" :amount="data.amount" />
      </div>
    </div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBCheckbox, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { computed, defineComponent, PropType, WritableComputedRef } from 'vue'

import CartApi from '@/api/cart/CartApi'
import CartItemAmount from '@/components/public-layout/cart/CartList/CartItem/CartItemAmount.vue'
import ProductImage from '@/components/public-layout/catalog/Product/ProductImage.vue'
import ProductPrice from '@/components/public-layout/catalog/Product/ProductPrice.vue'
import { ProductCartItem } from '@/types/product'

export default defineComponent({
  name: 'CartItem',
  props: {
    data: {
      type: Object as PropType<ProductCartItem>,
    },
  },
  components: {
    ProductPrice,
    CartItemAmount,
    ProductImage,
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
    'check name price price';
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
    justify-self: end;
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
