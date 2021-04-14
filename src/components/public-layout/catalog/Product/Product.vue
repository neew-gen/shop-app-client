<template>
  <MDBContainer>
    <MDBRow class="d-flex flex-column">
      <MDBCol>
        <ImageContainer
          :img-url="fetchedProduct.imgUrl"
          :name="fetchedProduct.name"
          height="40vh"
          width="100%"
        />
      </MDBCol>
      <MDBCol class="price-block">
        <div class="price-block__price">
          {{ fetchedProduct.price }}&ensp;dol.
        </div>
        <div class="price-block__controls">
          <MDBBtn color="light">
            <MDBIcon icon="heart" size="lg" iconStyle="far" />
          </MDBBtn>
          <MDBBtn color="light">
            <MDBIcon icon="shopping-cart" iconStyle="fas" size="lg" />
          </MDBBtn>
        </div>
      </MDBCol>
      <MDBCol class="name-block">
        {{ fetchedProduct.name }}
      </MDBCol>
      <MDBCol class="description-block">
        {{ fetchedProduct.description }}
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { MDBIcon, MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit'
// import { store } from '@/store'
import { ProductType } from '@/types/product'
import ImageContainer from '@/components/ImageContainer.vue'

export default defineComponent({
  name: 'Product',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    ImageContainer,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn
  },
  async setup(props) {
    // timer for the skeleton loader demonstration
    // const awaiting = await new Promise(res =>
    //   setTimeout(() => res('Product awaiting!'), 1000)
    // )
    // console.log(awaiting)
    // await store.dispatch('fetchProductById', props.id)
    //
    // const fetchedProduct: ComputedRef<ProductType> = computed(() => {
    //   return store.getters.getProductsById(props.id)
    // })
    // return { fetchedProduct }
  }
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
