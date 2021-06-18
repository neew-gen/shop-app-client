<template>
  <div v-if="productImages && productImages.length !== 0">
    <MDBListGroup>
      <CreateProductLoadedImagesListItem
        v-for="item in productImages"
        :data="item"
        :key="item.id"
      />
    </MDBListGroup>
  </div>
</template>

<script lang="ts">
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { computed, ComputedRef, defineComponent } from 'vue'

import CreateProductLoadedImagesListItem from '@/components/admin-layout/product/create-product/CreateProductImagesInput/CreateProductLoadedImagesListItem.vue'
import { useStore } from '@/store'
import { ProductImagesItem } from '@/types/product'

export default defineComponent({
  name: 'CreateProductLoadedImagesList',
  components: {
    CreateProductLoadedImagesListItem,
    MDBListGroup,
  },
  setup() {
    const store = useStore()
    const productImages: ComputedRef<ProductImagesItem[]> = computed(() => {
      return store.getters.getCreateProductImages
    })
    return { productImages }
  },
})
</script>

<style scoped lang="scss"></style>
