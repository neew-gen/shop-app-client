<template>
  <div class="public-wrapper">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/public-layout/Footer/PublicFooter.vue'

export default defineComponent({
  name: 'PublicLayout',
  components: {
    Footer,
  },
})
</script>

<style scoped lang="scss">
.public-wrapper {
  min-height: 100%;
}
#app {
}
</style>
