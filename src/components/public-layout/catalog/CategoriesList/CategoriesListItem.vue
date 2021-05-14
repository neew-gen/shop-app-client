<template>
  <MDBListGroupItem
    class="d-flex align-items-center border-0"
    @click="routerPush"
  >
    <div class="image">
      <div
        class="background-image"
        :style="`background-image: url(${imgUrl});`"
      />
    </div>
    <div class="name">{{ name }}</div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import router from '@/router'

export default defineComponent({
  name: 'CategoriesListItem',
  props: {
    categoryId: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    MDBListGroupItem,
  },
  setup(props) {
    const routerPush = (): void => {
      if (!props.categoryId) return
      router.push({
        name: 'catalog-products',
        params: { categoryId: props.categoryId },
      })
    }
    return { routerPush }
  },
})
</script>

<style scoped lang="scss">
.image {
  height: 60px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background-image {
  height: 100%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.name {
  margin-left: 20px;
  font-weight: 500;
}
</style>
