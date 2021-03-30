<template>
  <button
    type="button"
    class="btn btn-outline-secondary shadow-none"
    @click="goBack"
  >
    <img
      class="button-back-image"
      src="../assets/back-button/back.svg"
      alt=""
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'

export default defineComponent({
  name: 'BackButton',
  setup() {
    const goBack = (): void => {
      router.back()
    }
    return {
      goBack
    }
  }
})
</script>

<style scoped lang="scss">
.btn {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn:focus {
  background: transparent;
}
.button-back-image {
  height: 100%;
}
</style>
