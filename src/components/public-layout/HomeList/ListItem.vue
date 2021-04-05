<template>
  <div class="card col-6">
    <div class="d-flex justify-content-center">
      <div class="img-container mt-1">
        <img :src="computeImagePath(data.imgPath)" :alt="1" />
      </div>
    </div>
    <div class="card-body text-center">
      <p class="card-text">{{ data.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeListItemType } from '@/types'

export default defineComponent({
  name: 'ListItem',
  props: {
    data: {
      type: Object as () => HomeListItemType
    }
  },
  setup() {
    const computeImagePath = (imagePath: string): string => {
      return require(`../../assets/home/home-list/${imagePath}`)
    }
    return { computeImagePath }
  }
})
</script>

<style scoped lang="scss">
.img-container {
  border-radius: 50%;
  background: bisque;
  width: 50%;
  height: auto;
  > img {
    margin: 25%;
    width: 50%;
  }
}
.card-text {
  font-size: 0.8rem;
}
</style>
