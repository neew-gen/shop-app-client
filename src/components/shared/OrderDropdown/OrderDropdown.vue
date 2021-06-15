<template>
  <MDBCol col="12">
    <div class="order-dropdown-navbar">
      <div>By order:</div>
      <div class="d-flex align-items-center">
        <MDBBtn
          color="dark"
          v-if="activeOrder !== 'newer'"
          @click="setDropdown('newer')"
        >
          Reset
        </MDBBtn>
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
      </div>
    </div>
    <!--    <div class="order-dropdown-padding" />-->
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
} from 'mdb-vue-ui-kit'
import { defineComponent, onMounted, Ref, ref } from 'vue'

import orderData from './data.json'

export default defineComponent({
  name: 'OrderDropdown',
  components: {
    MDBCol,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBBtn,
  },
  emits: ['updateOrderDropdown'],
  setup(props, { emit }) {
    const showDropdown = ref(false)
    const filters = orderData.filters
    const activeOrder: Ref<keyof typeof filters> = ref('newer')

    const setDropdown = (newValue: keyof typeof filters): void => {
      activeOrder.value = newValue
      emit('updateOrderDropdown', filters[activeOrder.value])
      showDropdown.value = false
    }
    onMounted(() => {
      emit('updateOrderDropdown', filters[activeOrder.value])
    })
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
.order-dropdown-navbar {
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
.order-dropdown-padding {
  padding-bottom: 50px;
}
</style>
