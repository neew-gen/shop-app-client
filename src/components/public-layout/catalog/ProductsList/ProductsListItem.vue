<template>
  <MDBCol class="d-flex flex-column" col="6">
    <!--    v-mdb-ripple="{ duration: 1000 }"-->
    <div class="item-wrapper" @click="pushToProduct(data._id)">
      <div>
        <ImageContainer
          :img-url="data.productData.images[0].imgUrl"
          name="product.name"
          height="150px"
          width="100%"
        />
      </div>
      <div class="price-row">
        <div class="price-row__price">
          {{ data.productData.price }}&ensp;dol.
        </div>
        <MDBIcon icon="heart" size="lg" iconStyle="far" />
      </div>
      <div class="name-row">
        {{ data.productData.name }}
      </div>
    </div>
  </MDBCol>
</template>

<script lang="ts">
import {
  MDBCol,
  MDBIcon,
  // mdbRipple
} from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'

import ImageContainer from '@/components/ImageContainer.vue'
import router from '@/router'
import { Product, ProductListItem } from '@/types/product'

export default defineComponent({
  name: 'ProductsListItem',
  props: {
    data: {
      type: Object as PropType<ProductListItem>,
      required: true,
    },
  },
  components: {
    ImageContainer,
    MDBCol,
    MDBIcon,
  },
  // directives: {
  //   mdbRipple,
  // },
  setup(props) {
    const pushToProduct = (id: string): void => {
      router.push({
        name: 'CatalogProduct',
        params: { id },
      })
      // setTimeout(() => {
      //   router.push({
      //     name: 'CatalogProduct',
      //     params: { id },
      //   })
      // }, 100)
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
