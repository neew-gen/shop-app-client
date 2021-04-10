<template>
  <div>
    <CatalogBreadcrumb />
    <div class="router-container">
      <!--      <router-view v-slot="{ Component }">-->
      <!--        &lt;!&ndash;        mode="out-in"&ndash;&gt;-->
      <!--        <transition name="transition">-->
      <!--          <component :is="Component"></component>-->
      <!--        </transition>-->
      <!--      </router-view>-->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import CatalogBreadcrumb from '@/components/public-layout/PublicBreadcrumbs/CatalogBreadcrumb.vue'
export default defineComponent({
  name: 'Catalog',
  components: {
    CatalogBreadcrumb
  },
  setup() {
    const loading = inject('loading')
    // const transition = ref('forward')
    // onBeforeRouteUpdate((to, from, next) => {
    //   // here we are checking the transition direction and changing a animation
    //   if (to.fullPath.length > from.fullPath.length) {
    //     transition.value = 'forward'
    //   } else {
    //     transition.value = 'back'
    //   }
    //   next()
    // })
    return {
      loading
      // transition
    }
  }
})
</script>

<style lang="scss" scoped>
//$duration: 0.8s;
.router-container {
  padding-top: 55px;
  //padding-bottom: 55px;
}

//.transition-enter-active,
//.transition-leave-active {
//  transition: opacity $duration;
//}
//.transition-enter,
//.transition-leave-to {
//  opacity: 0;
//}

//.forward-enter-active,
//.forward-leave-active,
//.back-enter-active,
//.back-enter-active {
//  padding-top: 55px;
//  padding-bottom: 55px;
//}

//.back-enter-from,
//.back-leave-to,
//.forward-enter-from,
//.forward-leave-to {
//  height: 0;
//  opacity: 0;
//}
//
//.forward-enter-active {
//  animation: enter-aside $duration linear;
//}
//.forward-leave-active {
//  animation: leave-aside $duration linear;
//}
//
//.back-enter-active {
//  animation: leave-aside $duration reverse linear;
//}
//.back-leave-active {
//  animation: enter-aside $duration reverse linear;
//}
//
//@keyframes enter-aside {
//  0% {
//    height: 0;
//    opacity: 0;
//    transform: translateX(100%);
//  }
//  100% {
//    transform: translateX(0);
//    opacity: 1;
//  }
//}
//@keyframes leave-aside {
//  0% {
//    opacity: 1;
//    transform: translateX(0);
//  }
//  100% {
//    height: 0;
//    opacity: 0;
//    transform: translateX(-100%);
//  }
//}
</style>
