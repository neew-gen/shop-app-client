<template>
  <div class="d-flex justify-content-center align-items-center custom-spinner">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Spinner'
})
</script>

<style scoped lang="scss">
.custom-spinner {
  position: fixed;
  height: 80vh;
  width: 100vw;
}
</style>
