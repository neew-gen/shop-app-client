<template>
  <CategoryDropdown
    @updateCategoryDropdown="updateCategoryDropdown"
    :default-category-id="defaultCategoryId"
  />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, onMounted, ref } from 'vue'

import CategoryDropdown from '@/components/shared/CategoryDropdown/CategoryDropdown.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'CreateProductCategoryInput',
  components: {
    CategoryDropdown,
  },
  setup() {
    const store = useStore()
    const defaultCategoryId = ref('')

    const categoryId: ComputedRef<string | undefined> = computed(() => {
      return store.getters.getCreateProductCategoryId
    })

    const updateCategoryDropdown = (categoryId: string): void => {
      store.dispatch('updateCreateProductCategoryId', categoryId)
    }

    onMounted(() => {
      if (categoryId.value) {
        defaultCategoryId.value = categoryId.value
      }
    })

    return {
      categoryId,
      updateCategoryDropdown,
      defaultCategoryId,
    }
  },
})
</script>

<style scoped lang="scss">
.category-toggle {
  width: 153px;
}
</style>
