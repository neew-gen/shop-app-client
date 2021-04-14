<template>
  <div></div>
  <!--  <ProductsList :products="fetchedItems" />-->
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
// import { store } from '@/store'
import { ProductType } from '@/types/product'
import ProductsList from '@/components/public-layout/catalog/ProductsList/ProductsList.vue'

export default defineComponent({
  name: 'ProductsByCategory',
  // components: { ProductsList },
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    // timer for the skeleton loader demonstration
    // const p1 = await new Promise(res => setTimeout(() => res('p1'), 3000))
    // console.log(p1)
    // await store.dispatch('fetchProductsByCategoryId', props.categoryId)
    // const fetchedItems: ComputedRef<ProductType[]> = computed(() => {
    //   return store.getters.getProductsByCategoryId(props.categoryId)
    // })
    // return { fetchedItems }
  }
})
</script>

<style scoped lang="scss"></style>
