<template>
  <MDBCol class="d-flex flex-column" col="6">
    <div
      class="item-wrapper"
      v-mdb-ripple="{ duration: 1000 }"
      @click="pushToProduct(product.id)"
    >
      <div>
        <ImageContainer
          :img-url="product.imgUrl"
          name="product.name"
          height="150px"
          width="100%"
        />
      </div>
      <div class="price-row">
        <div class="price-row__price">{{ product.price }}&ensp;dol.</div>
        <MDBIcon icon="heart" size="lg" iconStyle="far" />
      </div>
      <div class="name-row">
        {{ product.name }}
      </div>
    </div>
  </MDBCol>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { MDBCol, MDBIcon, mdbRipple } from 'mdb-vue-ui-kit'
import { ProductType } from '@/types/product'
import ImageContainer from '@/components/ImageContainer.vue'
import router from '@/router'

export default defineComponent({
  name: 'ProductsListItem',
  props: {
    product: {
      type: Object as PropType<ProductType>,
      required: true,
    },
  },
  components: {
    ImageContainer,
    MDBCol,
    MDBIcon,
  },
  directives: {
    mdbRipple,
  },
  setup() {
    const pushToProduct = (id: string): void => {
      setTimeout(() => {
        router.push({
          name: 'CatalogProduct',
          params: { id },
        })
      }, 100)
    }
    return { pushToProduct }
  },
})
</script>

<style scoped lang="scss">
.item-wrapper {
  margin: 3px;
}
.price-row {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__price {
    font-size: 1.1rem;
    font-weight: 600;
  }
}
.name-row {
  padding: 5px;
  height: 61px;
  font-size: 0.9rem;
  line-height: 1.2;
}
</style>
