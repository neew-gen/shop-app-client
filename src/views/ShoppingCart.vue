<template>
  <NavbarWithBackButton title="Корзина" />
  <!--  <div class="container-fluid">-->
  <!--    <div class="row">-->
  <!--      <div v-if="!cartItems.length">-->
  <!--        Корзина пуста.-->
  <!--      </div>-->
  <!--      <ul class="list-group p-0" v-else>-->
  <!--        <li-->
  <!--          class="list-group-item d-flex"-->
  <!--          v-for="item in catalogItemsInCart"-->
  <!--          :key="item.id"-->
  <!--        >-->
  <!--          <div v-if="item.img" class="img-container mt-1">-->
  <!--            <img :src="item.img" :alt="item.name" />-->
  <!--          </div>-->
  <!--          <div v-else class="img-placeholder">-->
  <!--            <div>Фотография товара отсутствует.</div>-->
  <!--          </div>-->
  <!--          <div class="description-container">-->
  <!--            <div>{{ item.name }}</div>-->
  <!--            <div class="description-price">{{ item.price }}&#8381;</div>-->
  <!--          </div>-->
  <!--        </li>-->
  <!--      </ul>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import { useStore } from '@/store'
import NavbarWithBackButton from '@/components/NavbarWithBackButton.vue'
import { CartItemType, ProductItemType } from '@/types'

export default defineComponent({
  name: 'ShoppingCart',
  components: { NavbarWithBackButton }
  // setup() {
  //   const store = useStore()
  //   const cartItems: ComputedRef<CartItemType[]> = computed(
  //     (): CartItemType[] => store.getters.cartItemsGet
  //   )
  //   const catalogItemsInCart: ComputedRef<
  //     ProductItemType[] | undefined
  //   > = computed((): ProductItemType[] | undefined => {
  //     if (cartItems.value.length !== 0) {
  //       return store.getters.productsGet(cartItems.value)
  //     } else {
  //       return []
  //     }
  //   })
  //   return {
  //     cartItems,
  //     catalogItemsInCart
  //   }
  // }
})
</script>

<style scoped lang="scss">
.description-container {
  margin-left: 10px;
}
.description-price {
  font-size: 1.2rem;
  font-weight: 600;
}
.img-container {
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  > img {
    height: 100%;
    width: auto;
  }
}
.img-placeholder {
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  > div {
    text-align: center;
  }
}
</style>
