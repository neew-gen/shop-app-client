<template>
  <MDBDropdown>
    <MDBDropdownToggle class="category-dropdown" color="primary" disabled>
      <MDBSpinner tag="span" size="sm" />
    </MDBDropdownToggle>
  </MDBDropdown>
</template>
<script lang="ts">
import { MDBDropdown, MDBDropdownToggle, MDBSpinner } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoryDropdownFallback',
  components: {
    MDBDropdown,
    MDBDropdownToggle,
    MDBSpinner
  }
})
</script>

<style scoped lang="scss">
.category-dropdown {
  width: 153px;
}
</style>
