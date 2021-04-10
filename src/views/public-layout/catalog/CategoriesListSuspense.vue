<template>
  <div>
    <transition name="fade" mode="out-in">
      <Suspense>
        <template #default>
          <CategoriesList />
        </template>
        <template #fallback>
          <CategoriesListFallback />
        </template>
      </Suspense>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import CategoriesList from '@/components/public-layout/catalog/CategoriesList/CategoriesList.vue'
import CategoriesListFallback from '@/components/public-layout/catalog/CategoriesList/CategoriesListFallback.vue'
export default defineComponent({
  name: 'CategoriesListSuspense',
  components: { CategoriesListFallback, CategoriesList }

  // setup() {
  // }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
