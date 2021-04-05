<template>
  <div class="d-flex justify-content-between align-items-center p-1">
    <div class="d-flex flex-column filter-title">
      <span>Sort by</span><span>category</span>
    </div>
    <div class="d-flex">
      <MDBBtn color="success" v-if="showClearButton" @click="clearFilter"
        >Reset</MDBBtn
      >
      <div>
        <Suspense>
          <template #default>
            <CategoryDropdown />
          </template>
          <template #fallback>
            <CategoryDropdownFallback />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from 'vue'
import { MDBBtn } from 'mdb-vue-ui-kit'
import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown.vue'
import { CategoryIdType } from '@/types/eventBus'
import { eventBus } from '@/helpers/eventBus'
import { useStore } from '@/store'
import CategoryDropdownFallback from '@/components/CategoryDropdown/CategoryDropdownFallback.vue'

export default defineComponent({
  name: 'EditListFilter',
  components: { CategoryDropdownFallback, CategoryDropdown, MDBBtn },
  setup() {
    const showClearButton = ref(false)
    const store = useStore()
    let state = {
      categoryId: ''
    }

    const clearFilter = (): void => {
      eventBus.publish('parentUpdateCategory', '')
      store.dispatch('clearProductsEditList')
      showClearButton.value = false
    }

    eventBus.subscribe('childUpdateCategory', (categoryId: CategoryIdType) => {
      state.categoryId = categoryId
      showClearButton.value = true
      store.dispatch('filterProductsEditList', categoryId)
    })
    onUnmounted(() => {
      eventBus.unsubscribe('childUpdateCategory')
    })
    return { showClearButton, clearFilter }
  }
})
</script>

<style scoped lang="scss">
.filter-title {
  line-height: 1.2;
}
</style>
