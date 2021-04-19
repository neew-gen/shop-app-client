<template>
  <div class="d-flex justify-content-center align-items-center custom-spinner">
    <MDBSpinner color="primary" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBSpinner } from 'mdb-vue-ui-kit'

export default defineComponent({
  name: 'Spinner',
  components: {
    MDBSpinner,
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
