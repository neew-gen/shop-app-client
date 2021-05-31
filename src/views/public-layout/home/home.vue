<template>
  <HomeNavbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomeNavbar from '@/components/public-layout/home/HomeHavbar/HomeNavbar.vue'

export default defineComponent({
  name: 'home',
  components: {
    HomeNavbar,
  },
})
</script>

<style lang="scss" scoped></style>
