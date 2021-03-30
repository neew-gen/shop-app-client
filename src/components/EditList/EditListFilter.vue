<template>
  <div class="d-flex justify-content-between align-items-center p-1">
    <div>Sort by</div>
    <div class="d-flex">
      <button type="button" class="btn btn-success shadow-none">
        Clear
      </button>
      <div class="custom-dropdown">
        <Suspense>
          <CategoryDropdown />
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import CategoryDropdown from '@/components/CategoryDropdown.vue'
import { CategoryIdType } from '@/types/eventBus'
import { eventBus } from '@/helpers/eventBus'
import { useStore } from '@/store'

export default defineComponent({
  name: 'EditListFilter',
  components: { CategoryDropdown },
  setup() {
    const store = useStore()
    let state = {
      categoryId: ''
    }
    eventBus.subscribe('childUpdateCategory', (categoryId: CategoryIdType) => {
      state.categoryId = categoryId
      store.dispatch('fetchProductsEditListByCategory', categoryId)
    })
    onUnmounted(() => {
      eventBus.unsubscribe('childUpdateCategory')
    })
  }
})
</script>

<style scoped lang="scss">
.custom-dropdown {
  margin-left: 2px;
}
</style>
