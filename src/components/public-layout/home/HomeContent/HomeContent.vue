<template>
  <div>
    <Suspense>
      <template #default>
        <HomeSwiper />
        <!--        <HomeSwipeFallback />-->
      </template>
      <template #fallback>
        <!--        <HomeSwiper />-->
        <HomeSwipeFallback />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeSwiper from '@/components/public-layout/home/HomeContent/HomeSwiper/HomeSwiper.vue'
import HomeSwipeFallback from '@/components/public-layout/home/HomeContent/HomeSwiper/HomeSwiperFallback.vue'

export default defineComponent({
  name: 'HomeContent',
  components: {
    HomeSwipeFallback,
    HomeSwiper
  }
})
</script>

<style scoped lang="scss"></style>
