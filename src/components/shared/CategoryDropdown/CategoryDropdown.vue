<template>
  <MDBCol col="12">
    <div class="category-dropdown-navbar">
      <div>Category:</div>
      <div class="d-flex align-items-center">
        <MDBBtn color="dark" v-if="categoryId" @click="setDropdown('')">
          Reset
        </MDBBtn>
        <MDBDropdown v-model="showDropdown" :align="'end'" v-if="true">
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
      </div>
    </div>
    <!--    <div class="category-dropdown-padding" />-->
  </MDBCol>
</template>

<script lang="ts">
import {
  MDBBtn,
  MDBCol,
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
  onMounted,
  ref,
  watch,
} from 'vue'

import { reactiveFetcher } from '@/services/FetchService/fetchers/reactiveFetcher'
import { graphqlFetch } from '@/services/GraphqlService/GraphqlService'
import { GET_CATEGORIES_DROPDOWN } from '@/services/GraphqlService/queries/categoryQueries'
import { CategoryDropdownType } from '@/types/category'

export default defineComponent({
  name: 'CategoryDropdown',
  components: {
    MDBBtn,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBSpinner,
    MDBCol,
  },
  emits: ['updateCategoryDropdown'],
  props: {
    defaultCategoryId: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const showDropdown = ref(false)
    const categoryId = ref('')
    const setDropdown = (newCategoryId: string): void => {
      emit('updateCategoryDropdown', newCategoryId)
      categoryId.value = newCategoryId
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
    onMounted(() => {
      emit('updateCategoryDropdown', categoryId.value)
    })
    return {
      showDropdown,
      setDropdown,
      data,
      loading,
      categoryName,
      categoryId,
    }
  },
})
</script>

<style scoped lang="scss">
.category-dropdown-navbar {
  height: 50px;
  width: 100%;
  //padding: 5px;
  //position: fixed;
  //left: 0;
  //z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.category-dropdown-padding {
  padding-bottom: 50px;
}
.filter-title {
  line-height: 1.2;
}
</style>
