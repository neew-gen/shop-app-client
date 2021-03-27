<template>
  <div></div>
  <!--  <div class="card text-start col-12">-->
  <!--    <div class="d-flex justify-content-center">-->
  <!--      <div v-if="product.img" class="img-container mt-1">-->
  <!--        <img :src="product.img" :alt="product.name" />-->
  <!--      </div>-->
  <!--      <div-->
  <!--        v-else-->
  <!--        class="img-container mt-1 d-flex justify-content-center align-items-center"-->
  <!--      >-->
  <!--        <div>Фотография товара отсутствует.</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="card-header">-->
  <!--      {{ product.name }}-->
  <!--    </div>-->
  <!--    <div class="card-body p-0">-->
  <!--      <ul class="list-group list-group-flush">-->
  <!--        <li class="list-group-item">-->
  <!--          <h3-->
  <!--            class="card-title d-flex justify-content-between align-items-center m-0"-->
  <!--          >-->
  <!--            <div>{{ product.price }}&#8381;</div>-->
  <!--            <button-->
  <!--              type="button"-->
  <!--              class="btn btn-outline-success"-->
  <!--              @click="addToCart()"-->
  <!--            >-->
  <!--              Добавить в корзину-->
  <!--            </button>-->
  <!--          </h3>-->
  <!--        </li>-->
  <!--        <li class="list-group-item">-->
  <!--          <p class="card-text">-->
  <!--            {{ product.description }}-->
  <!--          </p>-->
  <!--        </li>-->
  <!--      </ul>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
import { computed, defineComponent, ComputedRef } from 'vue'
import { useStore } from '@/store'
import { ProductItemType } from '@/types'
export default defineComponent({
  name: 'CatalogItem',
  props: {
    category: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
  // setup(props) {
  //   const store = useStore()
  //   const product: ComputedRef<ProductItemType> = computed(
  //     (): ProductItemType => store.getters.productGet(props.category, props.id)
  //   )
  //   const addToCart = (): void => {
  //     store.dispatch('addToCart', { category: props.category, id: props.id })
  //   }
  //   return {
  //     product,
  //     addToCart
  //   }
  // }
})
</script>

<style scoped lang="scss">
.img-container {
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    height: 100%;
    width: auto;
  }
}
</style>
