<template>
  <div class="brand">
    <h1 class="brand__title" @click="goHome">Shop App</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import router from '@/router'

export default defineComponent({
  name: 'HomeNavbarBrand',
  components: {},
  setup() {
    const goHome = (): void => {
      router.push('/')
    }
    return {
      goHome,
    }
  },
})
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'adam';
  src: url('../../../../assets/fonts/Adam.ttf') format('truetype');
}
.brand {
  font-family: 'adam', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 110px;
  &__title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    color: #4f4f4f;
  }
}
</style>
