<template>
  <MDBCol col="12">
    <MDBDropdown class="my-1" v-model="showDropdown" :align="'end'">
      <MDBDropdownToggle
        class="category-dropdown"
        @click="showDropdown = !showDropdown"
      >
        <span> {{ filters[activeOrder].name }}</span>
      </MDBDropdownToggle>
      <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
        <MDBDropdownItem
          class="dropdown-item"
          v-for="(item, key) in filters"
          :key="key"
          @mouseup="setDropdown(key)"
        >
          {{ item.name }}
        </MDBDropdownItem>
      </MDBDropdownMenu>
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
} from 'mdb-vue-ui-kit'
import { defineComponent, onUnmounted, reactive, Ref, ref } from 'vue'

// import { useFetch } from '@/api/fetch/useFetch'
import { graphqlFetch } from '@/services/GraphqlService/GraphqlService'
import { GET_CATEGORIES_DROPDOWN } from '@/services/GraphqlService/queries/categoryQueries'
import { CategoryDropdownType } from '@/types/category'
import { ProductDiscountInput } from '@/types/product'

import productFilterData from './data.json'

export default defineComponent({
  name: 'ProductFilterMenu',
  components: {
    MDBCol,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  emits: ['updateFilter'],
  setup(props, { emit }) {
    const showDropdown = ref(false)
    // TODO need to type this
    const filters = productFilterData.filters
    const activeOrder: Ref<keyof typeof filters> = ref('newer')

    emit('updateFilter', filters[activeOrder.value])

    const setDropdown = (newValue: keyof typeof filters): void => {
      activeOrder.value = newValue
      emit('updateFilter', filters[activeOrder.value])
      showDropdown.value = false
    }
    return {
      showDropdown,
      activeOrder,
      setDropdown,
      filters,
    }
  },
})
</script>

<style scoped lang="scss">
.category-dropdown {
  width: 153px;
}
</style>
