<template>
  <div class="image-container" :style="`height: ${height}; width: ${width};`">
    <swiper
      v-if="images.length > 1"
      :slides-per-view="1"
      :space-between="20"
      :pagination="{
        type: 'progressbar',
      }"
      :loop="images.length > 1"
    >
      <swiper-slide v-for="item in images" :key="item.id">
        <div
          class="background-image"
          :style="`background-image: url(${item.imgUrl}); height: ${height}; width: ${width};`"
        />
      </swiper-slide>
    </swiper>
    <div
      v-if="images.length <= 1"
      class="background-image"
      :style="`background-image: url(${images[0].imgUrl}`"
    />
  </div>
</template>

<script lang="ts">
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { defineComponent, PropType } from 'vue'

SwiperCore.use([Pagination])
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

import { ProductImagesItem } from '@/types/product'

export default defineComponent({
  name: 'ProductImage',
  props: {
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    images: {
      type: Array as PropType<ProductImagesItem[]>,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
})
</script>

<style scoped lang="scss">
.background-image {
  height: 100%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    max-width: 100%;
    max-height: 100%;
  }
  &__placeholder {
    height: 50%;
    width: 50%;
  }
}
.swiper-container {
  height: 100%;
  width: 100%;
}
</style>
