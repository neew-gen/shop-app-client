<template>
  <MDBNavbar light bg="light">
    <div class="d-flex flex-column filter-title">
      <span>Sort by</span><span>category</span>
    </div>
    <CategoryDropdown />
  </MDBNavbar>
  <div class="filter-fake" />
</template>

<script lang="ts">
import { MDBNavbar } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown.vue'

export default defineComponent({
  name: 'EditProductsFilter',
  components: {
    CategoryDropdown,
    MDBNavbar,
  },
})
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  width: 100%;
  padding: 5px;
  position: fixed;
  left: 0;
  z-index: 2;
}
.filter-fake {
  padding-bottom: 50px;
}
.filter-title {
  line-height: 1.2;
}
</style>
