<template>
  <MDBContainer v-if="data">
    <MDBRow class="d-flex flex-column">
      <MDBCol>
        <ImageContainer
          :img-url="data.imgUrl"
          :name="data.name"
          height="40vh"
          width="100%"
        />
      </MDBCol>
      <MDBCol class="price-block">
        <div class="price-block__price">{{ data.price }}&ensp;dol.</div>
        <div class="price-block__controls">
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
      <MDBCol class="name-block">
        {{ data.name }}
      </MDBCol>
      <MDBCol class="description-block">
        {{ data.description }}
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  PropType,
  ref,
  watch,
} from 'vue'
import { MDBIcon, MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit'
import { ProductCartItem, ProductType } from '@/types/product'
import ImageContainer from '@/components/ImageContainer.vue'
import { useFetch } from '@/api/fetch-api/useFetch'
import { cartItemToCache } from '@/helpers/cacheFunctions'

export default defineComponent({
  name: 'Product',
  props: {
    data: {
      type: Object as PropType<ProductType>,
    },
  },
  components: {
    ImageContainer,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
  },
  setup(props) {
    const isInCart = ref(false)
    const { data: cartData } = useFetch<ProductCartItem[]>('CO', '/cart-cache')

    watch(cartData, () => {
      if (cartData.value)
        isInCart.value = cartData.value.some((p) => p.id === props.data!.id)
    })

    const addToCart = async (): Promise<void> => {
      isInCart.value = true
      const product: ProductCartItem = {
        id: props.data!.id,
        name: props.data!.name,
        imgUrl: props.data!.imgUrl,
        price: props.data!.price,
        value: 1,
        checked: true,
      }
      await cartItemToCache<ProductCartItem>('/cart-cache', product)
    }
    return { addToCart, isInCart }
  },
})
</script>

<style scoped lang="scss">
.price-block {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__price {
    font-size: 1.3rem;
    font-weight: 600;
  }
  &__controls {
    display: flex;
  }
}
.name-block {
  padding: 10px 12px;
  font-size: 1.3rem;
  font-weight: 500;
}
.description-block {
  padding: 10px 12px;
  font-size: 1rem;
  line-height: 1.2;
}
</style>
