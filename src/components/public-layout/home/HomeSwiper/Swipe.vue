<template>
  <div
    class="swipe-container"
    :style="`background-image: url(${data.imgUrl});`"
  >
    <div class="swipe">
      <div class="swipe-content">
        <div class="content-header">
          <div class="content-header__title">
            {{ data.title }}
          </div>
        </div>
        <div class="content-body">
          <div class="content-body__text">
            {{ data.text }}
          </div>
        </div>
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
      required: true,
    },
  },
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
  color: #ffffff;
  background-color: rgba(145, 145, 145, 0.9);
}
.swipe-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-header {
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
}
.content-body {
  height: 60%;
  padding: 0 5px;
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: 200;
  &__text {
    text-align: center;
  }
}
</style>
