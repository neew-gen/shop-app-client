<template>
  <MDBCol class="d-flex flex-column" col="6">
    <!--    v-mdb-ripple="{ duration: 1000 }"-->
    <div class="item-wrapper" @click="pushToProduct(data._id)">
      <div class="image-wrapper">
        <div v-if="data.productData.discount" class="percentage">
          -{{ data.productData.discount.percentage }}%
        </div>
        <ProductImage
          :images="[data.productData.images[0]]"
          height="150px"
          width="100%"
        />
      </div>
      <div class="price-row">
        <div v-if="!data.productData.discount" class="price-row__price">
          {{ data.productData.price.toFixed(2) }}&ensp;dol.
        </div>
        <div v-if="data.productData.discount" class="price-row__price sale">
          <div class="sale__old-price">
            {{ data.productData.price.toFixed(2) }}
          </div>
          <div class="sale__new-price">{{ discountPrice }}&ensp;dol.</div>
        </div>
        <MDBIcon class="sale__like" icon="heart" size="lg" iconStyle="far" />
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
import { computed, ComputedRef, defineComponent, PropType } from 'vue'

import ProductImage from '@/components/public-layout/Product/ProductImage.vue'
import router from '@/router'
import { ProductListItem } from '@/types/product'

export default defineComponent({
  name: 'ProductsListItem',
  props: {
    data: {
      type: Object as PropType<ProductListItem>,
      required: true,
    },
    routerMode: {
      type: String,
      required: true,
    },
  },
  components: {
    ProductImage,
    MDBCol,
    MDBIcon,
  },
  // directives: {
  //   mdbRipple,
  // },
  setup(props) {
    const pushToProduct = (_id: string): void => {
      let routerParams = {}
      if (props.routerMode === 'catalog-products') {
        routerParams = {
          name: 'catalog-product',
          params: { _id },
        }
      }
      if (props.routerMode === 'home-products') {
        routerParams = {
          name: 'home-product',
          params: { _id },
        }
      }
      router.push(routerParams)
      // setTimeout(() => {
      //   router.push({
      //     name: 'CatalogProduct',
      //     params: { id },
      //   })
      // }, 100)
    }
    const discountPrice: ComputedRef<string | undefined> = computed(() => {
      const { price, discount } = props.data.productData
      if (!discount) return
      const discountValue = (price / 100) * discount.percentage
      return (price - discountValue).toFixed(2)
    })
    return { pushToProduct, discountPrice }
  },
})
</script>

<style scoped lang="scss">
.item-wrapper {
  margin: 3px;
}

.image-wrapper {
  position: relative;
}
.percentage {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #f93154;
  color: #ffffff;
  padding: 0 3px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 3px;
}

.price-row {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &__price {
    font-size: 0.9rem;
    font-weight: 600;
  }
  &__like {
    justify-self: end;
  }
}

.sale {
  display: flex;
  align-items: center;
  &__old-price {
    color: #4f4f4f;
    font-size: 0.9rem;
    font-weight: 400;
    text-decoration: line-through;
  }
  &__new-price {
    padding-left: 2px;
  }
}

.name-row {
  padding: 5px;
  height: 61px;
  font-size: 0.9rem;
  line-height: 1.2;
}
@media (min-width: 540px) {
  .percentage {
    font-size: 0.8rem;
  }
  .price-row {
    &__price {
      font-size: 1.1rem;
    }
  }
}
</style>
