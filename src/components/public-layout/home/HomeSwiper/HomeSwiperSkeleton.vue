<template>
  <div class="ssc swipe-container">
    <div class="ssc-square image" />
    <div class="swipe">
      <div class="swipe-content">
        <div class="content-header">
          <div class="ssc-head-line content-header__title" />
        </div>
        <div class="content-body">
          <div class="ssc-head-line content-body__text" />
          <div class="ssc-head-line content-body__text" />
          <div class="ssc-head-line content-body__text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeSwiperSkeleton',
})
</script>

<style scoped lang="scss">
.swipe-container {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.image {
  height: 70%;
}
.swipe {
  height: 30%;
}
.swipe-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-header {
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__title {
    height: 23px;
    width: 70%;
  }
}
.content-body {
  height: 60%;
  width: 100%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &__text {
    height: 14px;
    width: 90%;
  }
}
</style>
