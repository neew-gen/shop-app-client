<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Header
  }
})
</script>

<style lang="scss">
#app {
  // костыль!!!!!!!!!!!!!!!!!!!!
  padding-bottom: 88px;
}
</style>
