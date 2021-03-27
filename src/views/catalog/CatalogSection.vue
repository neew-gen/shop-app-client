<template>
  <div></div>
  <!--  <div class="container-fluid">-->
  <!--    <div class="row">-->
  <!--      <router-link-->
  <!--        v-for="product in products"-->
  <!--        :key="product.id"-->
  <!--        :to="{-->
  <!--          name: 'CatalogItem',-->
  <!--          params: { category: category, id: product.id }-->
  <!--        }"-->
  <!--        class="card col-6"-->
  <!--      >-->
  <!--        <div class="d-flex justify-content-center">-->
  <!--          <div v-if="product.img" class="img-container mt-1">-->
  <!--            <img :src="product.img" :alt="product.name" />-->
  <!--          </div>-->
  <!--          <div-->
  <!--            v-else-->
  <!--            class="img-container mt-1 d-flex justify-content-center align-items-center"-->
  <!--          >-->
  <!--            <div class="text-center">-->
  <!--              Фотография товара отсутствует.-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="card-body d-flex flex-column align-items-start p-0 mt-2">-->
  <!--          <p class="card-text">-->
  <!--            {{ product.name }}-->
  <!--          </p>-->
  <!--          <p class="card-text price-text">{{ product.price }}&#8381;</p>-->
  <!--        </div>-->
  <!--      </router-link>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef } from 'vue'
import { useStore } from '@/store'
import { ProductItemType } from '@/types'

export default defineComponent({
  name: 'CatalogSection',
  props: {
    category: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    // const products: ComputedRef<ProductItemType[]> = computed(
    //   (): ProductItemType[] => store.getters.productsGet(props.category)
    // )
    // return {
    //   products
    // }
  }
})
</script>

<style scoped lang="scss">
.card {
  color: black;
  text-decoration: none;
}
.card-text {
  font-size: 0.8rem;
  margin: 0 !important;
}
.price-text {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
}
.img-container {
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    height: 100%;
    width: auto;
  }
}
</style>
