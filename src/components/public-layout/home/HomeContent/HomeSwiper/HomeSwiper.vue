<template>
  <div v-if="data">
    <swiper
      :slides-per-view="1"
      :space-between="20"
      :pagination="{
        type: 'progressbar'
      }"
      :loop="data.length !== 1"
    >
      <swiper-slide v-for="item in data" :key="item.swipeIndex">
        <Swipe :data="item.swipeData" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import Swipe from '@/components/public-layout/home/HomeContent/HomeSwiper/Swipe.vue'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'HomeSwiper',
  props: {
    data: {
      type: Array as PropType<SwipeType[]>
    }
  },
  components: {
    Swipe,
    Swiper,
    SwiperSlide
  }
})
</script>

<style scoped lang="scss"></style>
