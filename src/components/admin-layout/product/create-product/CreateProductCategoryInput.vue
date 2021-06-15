<template>
  <CategoryDropdown @updateCategoryDropdown="updateCategoryDropdown" />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

import CategoryDropdown from '@/components/shared/CategoryDropdown/CategoryDropdown.vue'
import { reactiveFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetch } from '@/services/GraphqlService/GraphqlService'
import { GET_CATEGORIES_DROPDOWN } from '@/services/GraphqlService/queries/categoryQueries'
import { useStore } from '@/store'
import { CategoryDropdownType } from '@/types/category'

export default defineComponent({
  name: 'CreateProductCategoryInput',
  components: {
    CategoryDropdown,
  },
  setup() {
    const store = useStore()
    // const showDropdown = ref(false)

    const categoryId: ComputedRef<string | undefined> = computed(() => {
      return store.getters.getCreateProductCategoryId
    })

    const updateCategoryDropdown = (categoryId: string): void => {
      console.log(categoryId)
      store.dispatch('updateCreateProductCategoryId', categoryId)
    }

    return {
      categoryId,
      updateCategoryDropdown,
    }
  },
})
</script>

<style scoped lang="scss">
.category-toggle {
  width: 153px;
}
</style>
