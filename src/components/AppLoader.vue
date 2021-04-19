<template>
  <transition name="fade">
    <div class="app-loader" v-if="loading">
      <div class="brand">
        <span class="block"></span>
        <HomeNavbarBrand />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch } from 'vue'
import HomeNavbarBrand from '@/components/public-layout/home/HomeHavbar/HomeNavbarBrand.vue'

export default defineComponent({
  name: 'AppLoader',
  components: { HomeNavbarBrand },
  setup() {
    const loading = inject('loading')

    return {
      loading,
    }
  },
})
</script>

<style scoped lang="scss">
.app-loader {
  position: absolute;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  z-index: 9999;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.fade-enter-active {
  transition: opacity 0.6s ease;
}
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.brand {
  width: 110px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
}
.block {
  width: 0%;
  height: inherit;
  background: #4f4f4f;
  position: absolute;
  animation: block-fade-aside 3s cubic-bezier(0.74, 0.06, 0.4, 0.92) 1s forwards
    infinite;
  display: flex;
  border-radius: 5px;
}
@keyframes block-fade-aside {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
</style>
