<template>
  <MDBCol col="12" class="d-flex justify-content-between align-items-center">
    <div>Category:</div>
    <MDBDropdown v-model="showDropdown" :align="'end'" v-if="!loading">
      <MDBDropdownToggle
        class="category-toggle"
        @click="showDropdown = !showDropdown"
        :disabled="data === undefined"
      >
        {{ categoryName }}
      </MDBDropdownToggle>
      <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
        <MDBDropdownItem class="dropdown-item" @mouseup="setDropdown('')">
          No Category
        </MDBDropdownItem>
        <MDBDropdownItem
          class="dropdown-item"
          v-for="item in data"
          :key="item.id"
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
  </MDBCol>
</template>

<script lang="ts">
import {
  MDBCol,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBSpinner,
} from 'mdb-vue-ui-kit'
import { computed, ComputedRef, defineComponent, ref } from 'vue'

import { reactiveFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetch } from '@/services/GraphqlService/GraphqlService'
import { GET_CATEGORIES_DROPDOWN } from '@/services/GraphqlService/queries/categoryQueries'
import { useStore } from '@/store'
import { CategoryDropdownType } from '@/types/category'

export default defineComponent({
  name: 'ProductCategoryInput',
  components: {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBSpinner,
    MDBCol,
  },
  setup() {
    const store = useStore()
    const showDropdown = ref(false)

    const categoryId: ComputedRef<string | undefined> = computed(() => {
      return store.getters.getCreateProductCategoryId
    })

    const setDropdown = (categoryId: string): void => {
      store.dispatch('updateCreateProductCategoryId', categoryId)
      showDropdown.value = false
    }

    const { data, loading } = reactiveFetcher<CategoryDropdownType[]>(
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
.category-toggle {
  width: 153px;
}
</style>
