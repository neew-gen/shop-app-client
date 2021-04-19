<template>
  <MDBDropdown v-model="showDropdown" align="end">
    <MDBDropdownToggle
      class="category-dropdown"
      @click="showDropdown = !showDropdown"
      :disabled="fetchedItems.length === 0"
    >
      <span v-if="fetchedItems.length === 0">No categories</span>
      <span v-else> {{ categoryName }}</span>
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
      <MDBDropdownItem
        class="dropdown-item"
        v-for="(item, index) in fetchedItems"
        :key="index"
        @click="setDropdown(item.id)"
        >{{ item.name }}</MDBDropdownItem
      >
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<script lang="ts">
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { CategoryDropdownType } from '@/types/category'
import { CategoryIdType } from '@/types/eventBus'
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from 'mdb-vue-ui-kit'
import {
  ComputedRef,
  computed,
  defineComponent,
  inject,
  onUnmounted,
  reactive,
  ref,
} from 'vue'
export default defineComponent({
  name: 'CategoryDropdown',
  components: {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  async setup() {
    const showDropdown = ref(false)
    const state = reactive({ categoryId: '', categoryName: '' })
    const eventBus: any = inject('eventBus')
    eventBus.subscribe('parentUpdateCategory', (id: CategoryIdType) => {
      state.categoryId = id
    })
    const updateCategoryId = (id: string): void => {
      state.categoryId = id
    }
    const setDropdown = (id: string): void => {
      showDropdown.value = false
      updateCategoryId(id)
      eventBus.publish('childUpdateCategory', id)
    }
    onUnmounted(() => {
      eventBus.unsubscribe('parentUpdateCategory')
    })
    const fetchedItems: CategoryDropdownType[] = await GraphqlApi.fetchCategoryDropdown()
    const categoryName: ComputedRef<string> = computed((): string => {
      if (state.categoryId) {
        const currentCategory = fetchedItems.filter(
          (c) => c.id === state.categoryId,
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
      showDropdown,
      setDropdown,
      fetchedItems,
      categoryName,
    }
  },
})
</script>

<style scoped lang="scss">
.category-dropdown {
  width: 153px;
}
</style>
