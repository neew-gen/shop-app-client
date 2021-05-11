<template>
  <MDBDropdown v-model="showDropdown" :align="'end'" v-if="!loading && data">
    <MDBDropdownToggle
      class="category-dropdown"
      @click="showDropdown = !showDropdown"
      :disabled="data === undefined"
    >
      <span> {{ categoryName }}</span>
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
      <MDBDropdownItem class="dropdown-item" @mouseup="setDropdown(undefined)">
        No Category
      </MDBDropdownItem>
      <MDBDropdownItem
        class="dropdown-item"
        v-for="(item, index) in data"
        :key="index"
        @mouseup="setDropdown(item.id)"
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
import { computed, ComputedRef, defineComponent, onUnmounted, ref } from 'vue'

import { useFetch } from '@/api/fetch/useFetch'
import { graphqlFetch } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORIES_DROPDOWN } from '@/api/graphql-api/queries/categoryQueries'
import { useStore } from '@/store'
import { CategoryDropdownType } from '@/types/category'

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
    const store = useStore()
    const showDropdown = ref(false)

    const categoryId: ComputedRef<string | undefined> = computed(() => {
      return store.getters.getCategoryDropdown
    })

    const setDropdown = (categoryId: string): void => {
      store.dispatch('updateCategoryDropdown', categoryId)
      showDropdown.value = false
    }

    const { data, loading } = useFetch<CategoryDropdownType[]>(
      'SWR',
      '/category-dropdown',
      () => graphqlFetch(GET_CATEGORIES_DROPDOWN),
    )

    const categoryName: ComputedRef<string> = computed((): string => {
      if (!data.value) return 'No categories'
      if (!categoryId.value) return 'No category'
      const currentCategory = data.value.filter(
        (c: CategoryDropdownType) => c.id === categoryId.value,
      )[0]
      if (!currentCategory) return 'No category'
      return currentCategory.name
    })

    // onUnmounted(() => {
    //   store.dispatch('updateCategoryDropdown', undefined)
    // })

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
