<template>
  <div class="auth-wrapper">
    <div class="auth__brand">
      <HomeNavbarBrand />
    </div>
    <div class="auth__tabs">
      <AuthTabs />
    </div>
    <div class="auth__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AuthTabs from '@/components/auth-layout/AuthTabs/AuthTabs.vue'
import HomeNavbarBrand from '@/components/public-layout/home/HomeHavbar/HomeNavbarBrand.vue'

export default defineComponent({
  name: 'AuthLayout',
  components: { AuthTabs, HomeNavbarBrand },
})
</script>

<style scoped lang="scss">
.auth-wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh auto 1fr;
  gap: 5px 20px;
  align-items: center;
  grid-template-areas:
    'brand'
    'tabs'
    'content';
}
.auth {
  &__brand {
    grid-area: brand;
  }
  &__tabs {
    grid-area: tabs;
  }
  &__content {
    grid-area: content;
    align-self: center;
  }
}
</style>
