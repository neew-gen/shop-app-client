<template>
  <HomeSwiper v-if="!swiperLoading" :data="swiperData" />
  <HomeSwiperSkeleton v-if="swiperLoading" />

  <HomeMenu />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomeMenu from '@/components/public-layout/home/HomeMenu/HomeMenu.vue'
import HomeSwiper from '@/components/public-layout/home/HomeSwiper/HomeSwiper.vue'
import HomeSwiperSkeleton from '@/components/public-layout/home/HomeSwiper/HomeSwiperSkeleton.vue'
import { reactiveFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetch } from '@/services/GraphqlService/GraphqlService'
import { GET_SWIPES } from '@/services/GraphqlService/queries/swipeQueries'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'home-main',
  components: {
    HomeMenu,
    HomeSwiper,
    HomeSwiperSkeleton,
  },
  setup() {
    const { data: swiperData, loading: swiperLoading } = reactiveFetcher<
      SwipeType[]
    >('NF', '/home-content-swiper', () => graphqlFetch(GET_SWIPES))
    return { swiperData, swiperLoading }
  },
})
</script>

<style scoped lang="scss"></style>
