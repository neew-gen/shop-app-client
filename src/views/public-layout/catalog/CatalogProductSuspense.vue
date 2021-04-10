<template>
  <div>
    <transition name="fade" mode="out-in">
      <Suspense>
        <!--        <div>-->
        <!--          <Product :id="id" />-->
        <!--          <ProductFallback />-->
        <!--        </div>-->
        <template #default>
          <Product :id="id" />
        </template>
        <template #fallback>
          <ProductFallback />
        </template>
      </Suspense>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Product from '@/components/public-layout/catalog/Product/Product.vue'
import ProductFallback from '@/components/public-layout/catalog/Product/ProductFallback.vue'

export default defineComponent({
  name: 'CatalogProductSuspense',
  components: { ProductFallback, Product },
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
