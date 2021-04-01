<template>
  <div class="app-wrapper">
    <div class="view-wrapper">
      <router-view />
    </div>
    <div><Footer /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'PublicLayout',
  components: {
    Footer
  }
})
</script>

<style scoped lang="scss">
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.view-wrapper {
  // костыль!!!!!!!!!!!!!!!!!!!!
  padding-bottom: 88px;
}
#app {
}
</style>
