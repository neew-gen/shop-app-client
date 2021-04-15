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
          <MDBBtn color="light">
            <MDBIcon icon="shopping-cart" iconStyle="fas" size="lg" />
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
import { defineComponent, PropType } from 'vue'
import { MDBIcon, MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit'
import { ProductType } from '@/types/product'
import ImageContainer from '@/components/ImageContainer.vue'

export default defineComponent({
  name: 'Product',
  props: {
    data: {
      type: Object as PropType<ProductType>
    }
  },
  components: {
    ImageContainer,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn
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
