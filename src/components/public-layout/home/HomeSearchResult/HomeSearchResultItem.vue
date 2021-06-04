<template>
  <MDBListGroupItem class="result">
    <div class="search-image">
      <img :src="data.productData.images[0].imgUrl" alt="" />
    </div>
    <div>{{ data.productData.name }}</div>
    <div>{{ data.productData.description }}</div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'

import { ProductSearchItem } from '@/types/product'

export default defineComponent({
  name: 'HomeSearchResultItem',
  components: { MDBListGroupItem },
  props: {
    data: {
      type: Object as PropType<ProductSearchItem>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.result {
  display: flex;
}
.search-image {
  height: 40px;
  width: 60px;
  > img {
    height: 100%;
    width: 100%;
  }
}
</style>
