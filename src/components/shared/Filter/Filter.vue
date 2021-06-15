<template>
  <MDBNavbar light bg="light">
    <MDBCol col="12" @click="updateShowFilter(!showFilter)">
      <div class="filter-title">
        <div>Filter</div>
        <MDBIcon v-if="!showFilter" icon="angle-down" iconStyle="fas" />
      </div>
    </MDBCol>
    <MDBCollapse v-model="showFilter">
      <slot></slot>
      <MDBCol col="12" v-if="showFilter" @click="updateShowFilter(false)">
        <div class="filter-footer">
          <MDBIcon icon="angle-up" iconStyle="fas" />
        </div>
      </MDBCol>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script lang="ts">
import { MDBCol, MDBCollapse, MDBIcon, MDBNavbar } from 'mdb-vue-ui-kit'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Filter',
  components: {
    MDBCol,
    MDBNavbar,
    MDBIcon,
    MDBCollapse,
  },
  setup() {
    const showFilter = ref(false)
    const updateShowFilter = (newStatus: boolean): void => {
      showFilter.value = newStatus
    }

    return {
      showFilter,
      updateShowFilter,
    }
  },
})
</script>

<style scoped lang="scss">
.filter-title {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  caret-color: transparent;
}
.filter-footer {
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  caret-color: transparent;
}
</style>
