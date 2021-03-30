<template>
  <div :class="`btn-group ${listPosition}`">
    <button
      class="btn btn-secondary shadow-none dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      :disabled="fetchedItems.length === 0"
    >
      Category:
      <span v-if="fetchedItems.length === 0">No categories</span>
      <span v-else>{{ categoryName }}</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li
        class="dropdown-item"
        v-for="(item, index) in fetchedItems"
        :key="index"
        @click="setDropdown(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  reactive
} from 'vue'
import { CategoryDropdownType } from '@/types/category'
import { GraphqlApi } from '@/api/GraphqlApi'
import { CategoryIdType } from '@/types/eventBus'

export default defineComponent({
  name: 'CategoryDropdown',
  props: {
    listPosition: {
      type: String
    }
  },
  async setup() {
    const state = reactive({
      categoryId: '',
      categoryName: ''
    })
    const eventBus: any = inject('eventBus')

    const updateCategoryId = (id: string): void => {
      state.categoryId = id
    }

    const setDropdown = (id: string): void => {
      updateCategoryId(id)
      console.log('dd publ')
      eventBus.publish('childUpdateCategory', id)
    }
    eventBus.subscribe('parentUpdateCategory', (id: CategoryIdType) => {
      console.log('dd subs')
      state.categoryId = id
    })

    onUnmounted(() => {
      eventBus.unsubscribe('parentUpdateCategory')
    })

    const fetchedItems: CategoryDropdownType[] = await GraphqlApi.fetchCategoryDropdown()

    const categoryName: ComputedRef<string> = computed((): string => {
      if (state.categoryId) {
        const currentCategory = fetchedItems.filter(
          c => c.id === state.categoryId
        )[0]
        if (currentCategory) {
          return currentCategory.name
        } else {
          return 'No category'
        }
      } else {
        return 'No category'
      }
    })
    return {
      setDropdown,
      fetchedItems,
      categoryName
    }
  }
})
</script>

<style scoped lang="scss"></style>
