<template>
  <div class="ProductSwiper">
    {{ images }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { ProductImagesItem } from '@/types/product'

export default defineComponent({
  name: 'ProductSwiper',
  props: {
    images: {
      type: Array as PropType<ProductImagesItem[]>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
