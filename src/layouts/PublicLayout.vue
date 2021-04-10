<template>
  <div class="wrapper">
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
    Footer
  }
})
</script>

<style scoped lang="scss">
//.app-wrapper {
//  min-height: 100vh;
//  display: flex;
//  flex-direction: column;
//  justify-content: space-between;
//}
.wrapper {
  padding-bottom: 70px;
}
#app {
}
</style>
