<template>
  <div class="image-container" :style="`height: ${size}; width: ${size};`">
    <img
      class="image-container__img"
      :src="imgUrl"
      alt="Image"
      v-if="hasHttpInUrl(imgUrl)"
    />
    <img
      class="image-container__placeholder"
      src="@/assets/images/image-container/no-photo.svg"
      alt=""
      v-else
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageContainer',
  props: {
    size: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const hasHttpInUrl = (imgUrl: string): boolean => {
      // it is emulate of checking image exist
      return imgUrl.match(/(http(s?))/gim) != null
    }
    return {
      hasHttpInUrl
    }
  }
})
</script>

<style scoped lang="scss">
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
</style>
