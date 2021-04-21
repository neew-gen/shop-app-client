<template>
  <MDBCol
    class="d-flex justify-content-center align-items-center custom-spinner"
  >
    <MDBSpinner color="primary" />
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBSpinner } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Spinner',
  components: {
    MDBSpinner,
    MDBCol,
  },
})
</script>

<style scoped lang="scss">
.custom-spinner {
  position: fixed;
  height: 80vh;
  width: 100vw;
}
</style>
