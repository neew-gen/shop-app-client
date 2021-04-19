<template>
  <div>
    <div class="swiper-block">
      <HomeSwiper v-if="!swiperLoading" :data="swiperData" />
      <HomeSwiperSkeleton v-if="swiperLoading" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFetch } from '@/api/fetch-api/useFetch'
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { GET_SWIPES } from '@/api/graphql-api/queries/swipeQueries'
import { SwipeType } from '@/types/swipe'
import HomeSwiper from '@/components/public-layout/home/HomeContent/HomeSwiper/HomeSwiper.vue'
import HomeSwiperSkeleton from '@/components/public-layout/home/HomeContent/HomeSwiper/HomeSwiperSkeleton.vue'

export default defineComponent({
  name: 'HomeContent',
  components: {
    HomeSwiper,
    HomeSwiperSkeleton,
  },
  setup() {
    const { data: swiperData, loading: swiperLoading } = useFetch<SwipeType[]>(
      'SWR',
      'HomeContentSwiper',
      GraphqlApi.fetchAll,
      [GET_SWIPES],
    )
    return { swiperData, swiperLoading }
  },
})
</script>

<style scoped lang="scss">
//.fade-enter-active {
//  transition: opacity $catalog-fade-duration linear;
//}
//.fade-leave-active {
//  transition: opacity $catalog-fade-duration linear;
//}
//.fade-enter,
//.fade-leave-to {
//  opacity: 0;
//}
</style>
