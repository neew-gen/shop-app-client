<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="20"
      :pagination="{
        type: 'progressbar'
      }"
      :loop="fetchedItems.length !== 1"
    >
      <swiper-slide v-for="item in fetchedItems" :key="item.swipeIndex">
        <Swipe :data="item.swipeData" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import Swipe from '@/components/public-layout/home/HomeContent/HomeSwiper/Swipe.vue'
import { store } from '@/store'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'HomeSwiper',
  components: {
    Swipe,
    Swiper,
    SwiperSlide
  },
  async setup() {
    await store.dispatch('fetchSwipeHomeSwiper')
    const p1 = await new Promise(res => setTimeout(() => res('p1'), 4000))
    console.log(p1)
    const fetchedItems: ComputedRef<SwipeType[]> = computed(() => {
      return store.getters.getSwipeHomeSwiper
    })
    return { fetchedItems }
  }
})
</script>

<style scoped lang="scss"></style>
