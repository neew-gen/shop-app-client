<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
      <div>
        <div class="image-container">
          <img :src="data.img" alt="" v-if="checkImgValidate(data.img)" />
          <div v-else>No image</div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-end justify-content-between">
        <div>ID: {{ data.id }}</div>
        <div>Name: {{ data.name }}</div>
        <router-link
          class="btn btn-info"
          :to="{ name: `EditProduct`, params: { id: data.id } }"
        >
          Edit product
        </router-link>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EditListProduct } from '@/types/product'

export default defineComponent({
  name: 'EditListItem',
  props: {
    data: {
      type: Object as () => EditListProduct
    }
  },
  setup() {
    const checkImgValidate = (imgUrl: string): boolean => {
      return imgUrl.match(/(http(s?))/gim) != null
    }
    return {
      checkImgValidate
    }
  }
})
</script>

<style scoped lang="scss">
.image-container {
  height: 120px;
  margin-right: 10px;
  > img {
    height: 100%;
    width: auto;
  }
}
</style>
