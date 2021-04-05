<template>
  <div
    class="swipe-container"
    :style="`background-image: url(${data.imgUrl});`"
  >
    <div class="swipe">
      <div class="swipe-content">
        <h3 class="swipe-content__title">{{ data.title }}</h3>
        <div class="swipe-content__text">{{ data.text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SwipeData } from '@/types/swipe'

export default defineComponent({
  name: 'Swipe',
  props: {
    data: {
      Type: Object as () => SwipeData,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.swipe-container {
  height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.swipe {
  height: 30%;
  display: inline;
  line-height: 14px;
  color: #ffffff;
  background-color: rgba(145, 145, 145, 0.58);
}
.swipe-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__text {
    text-align: center;
  }
}
</style>
