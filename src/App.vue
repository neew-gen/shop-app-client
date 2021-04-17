<template>
  <div v-if="loading">
    <AppLoader />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import AppLoader from '@/components/AppLoader.vue'
export default defineComponent({
  components: { AppLoader },
  setup() {
    const loading = inject('loading')
    // TODO need to improve this height listener
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    return {
      loading,
    }
  },
})
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  min-height: 100%;
}
</style>
