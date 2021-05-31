<template>
  <MDBContainer>
    <router-view />
    <Footer />
  </MDBContainer>
</template>

<script lang="ts">
import { MDBContainer } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import Footer from '@/components/public-layout/Footer/PublicFooter.vue'

export default defineComponent({
  name: 'PublicLayout',
  components: {
    Footer,
    MDBContainer,
  },
})
</script>

<style scoped lang="scss">
.public-wrapper {
  min-height: 100%;
}
</style>
