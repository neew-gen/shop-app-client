<template>
  <MDBDropdown v-model="showDropdown" :align="'end'" v-if="!loading && data">
    <MDBDropdownToggle
      class="category-dropdown"
      @click="showDropdown = !showDropdown"
      :disabled="data.length === 0"
    >
      <span v-if="data.length === 0">No categories</span>
      <span v-else> {{ categoryName }}</span>
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
      <MDBDropdownItem
        class="dropdown-item"
        v-for="(item, index) in data"
        :key="index"
        @click="setDropdown(item.id)"
      >
        {{ item.name }}
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>

  <MDBDropdown v-if="loading">
    <MDBDropdownToggle class="category-dropdown" color="primary" disabled>
      <MDBSpinner tag="span" size="sm" />
    </MDBDropdownToggle>
  </MDBDropdown>
</template>

<script lang="ts">
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBSpinner,
} from 'mdb-vue-ui-kit'
import {
  computed,
  ComputedRef,
  defineComponent,
  onUnmounted,
  reactive,
  ref,
} from 'vue'

import { useFetch } from '@/api/fetch-api/useFetch'
import { graphqlFetch } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORIES_DROPDOWN } from '@/api/graphql-api/queries/categoryQueries'
import { eventBus } from '@/helpers/EventBus'
import { CategoryDropdownType } from '@/types/category'
import { CategoryIdType } from '@/types/eventBus'

export default defineComponent({
  name: 'CategoryDropdown',
  components: {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBSpinner,
  },
  setup() {
    const showDropdown = ref(false)
    const state = reactive({ categoryId: '', categoryName: '' })

    eventBus.subscribe('parentUpdateCategory', (id: CategoryIdType) => {
      state.categoryId = id
    })

    const updateCategoryId = (id: string): void => {
      state.categoryId = id
    }
    const setDropdown = (id: string): void => {
      updateCategoryId(id)
      eventBus.publish('childUpdateCategory', id)
      showDropdown.value = false
    }

    const { data, loading } = useFetch<CategoryDropdownType[]>(
      'SWR',
      '/category-dropdown',
      () => graphqlFetch(GET_CATEGORIES_DROPDOWN),
    )

    const categoryName: ComputedRef<string> = computed((): string => {
      if (!data.value) return 'No category'
      if (!state.categoryId) return 'No category'
      const currentCategory = data.value.filter(
        (c: CategoryDropdownType) => c.id === state.categoryId,
      )[0]
      if (!currentCategory) return 'No category'
      return currentCategory.name
    })

    onUnmounted(() => {
      eventBus.unsubscribe('parentUpdateCategory')
    })
    return {
      showDropdown,
      setDropdown,
      data,
      loading,
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
