<template>
  <MDBContainer>
    <MDBRow class="d-flex flex-column">
      <MDBCol>
        <div class="image-wrapper">
          <div v-if="data.productData.discount" class="discount">
            <div class="discount__item">
              -{{ data.productData.discount.percentage }}%
            </div>
            <div v-if="data.productData.discount" class="discount__item">
              {{ discountWillEnd }}
            </div>
          </div>
          <ProductImage
            :images="data.productData.images"
            height="40vh"
            width="100%"
          />
        </div>
      </MDBCol>
      <MDBCol class="price-row">
        <div v-if="!data.productData.discount" class="price-row__price">
          {{ data.productData.price.toFixed(2) }}&ensp;dol.
        </div>
        <div v-if="data.productData.discount" class="price-row__price sale">
          <div class="sale__old-price">
            {{ data.productData.price.toFixed(2) }}
          </div>
          <div class="sale__new-price">{{ discountPrice }}&ensp;dol.</div>
        </div>
        <div class="price-row__controls">
          <MDBBtn color="light">
            <MDBIcon icon="heart" size="lg" iconStyle="far" />
          </MDBBtn>
          <MDBBtn
            class="d-flex justify-center align-items-center"
            @click="addToCart"
            :color="isInCart ? 'success' : 'light'"
            :disabled="isInCart"
          >
            <MDBIcon icon="shopping-cart" iconStyle="fas" size="lg" />
            <div v-if="isInCart">
              <MDBIcon class="mx-1" icon="check" iconStyle="fas" size="lg" />
            </div>
          </MDBBtn>
        </div>
      </MDBCol>
      <MDBCol class="name-row">
        {{ data.productData.name }}
      </MDBCol>
      <MDBCol class="description-row">
        {{ data.productData.description }}
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-vue-ui-kit'
import moment from 'moment'
import { computed, ComputedRef, defineComponent, PropType, ref } from 'vue'

import CartApi from '@/api/cart/CartApi'
import ProductImage from '@/components/public-layout/catalog/Product/ProductImage.vue'
import { Product, ProductCartItem } from '@/types/product'

export default defineComponent({
  name: 'Product',
  props: {
    data: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  components: {
    ProductImage,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
  },
  setup(props) {
    const nowMoment = ref(moment())
    const isInCart = ref(false)

    const discountPrice: ComputedRef<string | undefined> = computed(() => {
      const { price, discount } = props.data.productData
      if (!discount) return
      const discountValue = (price / 100) * discount.percentage
      return (price - discountValue).toFixed(2)
    })

    const discountWillEnd: ComputedRef<string | undefined> = computed(() => {
      if (!props.data.productData.discount) return
      const { endsAt } = props.data.productData.discount
      if (!endsAt) return
      const endMoment = moment(endsAt)
      return `Ends ${endMoment.from(nowMoment.value)}`
    })

    // const { data: cartData } = reactiveFetcher<ProductCartItem[]>(
    //   'CO',
    //   '/cart-cache',
    // )
    // const isInCartUnwatch = watch(cartData, () => {
    //   if (cartData.value)
    //     isInCart.value = cartData.value.some((p) => p._id === props.data._id)
    // })

    const addToCart = (): void => {
      isInCart.value = true
      const { _id } = props.data
      const { price, discount } = props.data.productData
      const discountToCart = (): null | { percentage: number } => {
        if (!discount) return null
        return { percentage: discount.percentage }
      }
      const itemToCart: ProductCartItem = {
        _id,
        value: 1,
        checked: true,
        price,
        discount: discountToCart(),
      }
      CartApi.addItemToCart(itemToCart)
      // cartItemToCache<ProductCartItem>('/cart-cache', itemToCart)
    }

    // onUnmounted(() => {
    //   isInCartUnwatch()
    // })
    return { discountPrice, discountWillEnd, addToCart, isInCart }
  },
})
</script>

<style scoped lang="scss">
.price-row {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__price {
    font-size: 1.4rem;
    font-weight: 600;
  }
  &__controls {
    display: flex;
  }
}

.image-wrapper {
  position: relative;
}
.discount {
  position: absolute;
  bottom: 3px;
  display: flex;
  &__item {
    background: #f93154;
    color: #ffffff;
    margin-left: 5px;
    padding: 0 5px;
    font-size: 0.9rem;
    font-weight: 400;
    border-radius: 5px;
  }
}
.ends-at {
}
.sale {
  display: flex;
  align-items: center;
  &__old-price {
    color: #4f4f4f;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: line-through;
  }
  &__new-price {
    padding-left: 2px;
  }
}

.name-row {
  padding: 10px 12px;
  font-size: 1.3rem;
  font-weight: 500;
}
.description-row {
  padding: 10px 12px;
  font-size: 1rem;
  line-height: 1.2;
}
</style>
