<template>
  <div>
    <div class="swiper-block">
      <HomeSwiper v-if="!swiperLoading" :data="swiperData" />
      <HomeSwiperSkeleton v-if="swiperLoading" />
    </div>
    <div class="sale-block">
      <HomeSale />
    </div>
    <div>new</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { reactiveFetcher } from '@/api/fetch'
import { graphqlFetch } from '@/api/graphql-api/GraphqlApi'
import { GET_SWIPES } from '@/api/graphql-api/queries/swipeQueries'
import HomeSale from '@/components/public-layout/home/HomeContent/HomeSale/HomeSale.vue'
import HomeSwiper from '@/components/public-layout/home/HomeContent/HomeSwiper/HomeSwiper.vue'
import HomeSwiperSkeleton from '@/components/public-layout/home/HomeContent/HomeSwiper/HomeSwiperSkeleton.vue'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'HomeContent',
  components: {
    HomeSale,
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
