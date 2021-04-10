<template>
  <div>
    <transition name="fade" mode="out-in">
      <Suspense>
        <!--      <div>-->
        <!--        <ProductsByCategoryFallback />-->
        <!--        <ProductsByCategory :categoryId="categoryId" />-->
        <!--      </div>-->
        <template #default>
          <ProductsByCategory :categoryId="categoryId" />
        </template>
        <template #fallback>
          <ProductsByCategoryFallback />
        </template>
      </Suspense>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductsByCategory from '@/components/public-layout/catalog/ProductsByCategory/ProductsByCategory.vue'
import ProductsByCategoryFallback from '@/components/public-layout/catalog/ProductsByCategory/ProductsByCategoryFallback.vue'

export default defineComponent({
  name: 'ProductsByCategorySuspense',
  components: {
    ProductsByCategoryFallback,
    ProductsByCategory
  },
  props: {
    categoryId: {
      type: String,
      required: true
    }
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
// transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
