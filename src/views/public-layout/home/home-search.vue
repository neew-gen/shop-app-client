<template>
  <div v-if="searchLoading">
    <LoadingBar />
  </div>
  <div v-if="!searchLoading">
    <div v-if="searchResult.length === 0">No results.</div>
    <div v-if="searchResult.length !== 0">
      <HomeSearchResult :search-result="searchResult" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

import HomeSearchResult from '@/components/public-layout/home/HomeSearchResult/HomeSearchResult.vue'
import LoadingBar from '@/components/public-layout/LoadingBar.vue'
import { useStore } from '@/store'
import { ProductSearchItem } from '@/types/product'

export default defineComponent({
  name: 'home-search',
  components: {
    LoadingBar,
    HomeSearchResult,
  },
  setup() {
    const store = useStore()
    const searchResult: ComputedRef<ProductSearchItem[]> = computed(() => {
      return store.getters.getSearchResult
    })
    const searchLoading: ComputedRef<boolean> = computed(() => {
      return store.getters.getSearchLoading
    })
    return { searchResult, searchLoading }
  },
})
</script>

<style scoped lang="scss"></style>
