<template>
  <MDBListGroupItem
    class="d-flex align-items-center border-0"
    @click="routerPush"
  >
    <div class="item-image">
      <ImageContainer
        height="60px"
        width="90px"
        :img-url="imgUrl"
        :name="name"
      />
    </div>
    <div class="item-name">{{ name }}</div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import ImageContainer from '@/components/ImageContainer.vue'
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
    ImageContainer,
    MDBListGroupItem,
  },
  setup(props) {
    const routerPush = (): void => {
      if (!props.categoryId) return
      router.push({
        name: 'CatalogProducts',
        params: { categoryId: props.categoryId },
      })
    }
    return { routerPush }
  },
})
</script>

<style scoped lang="scss">
.item-name {
  margin-left: 20px;
  font-weight: 500;
}
</style>
