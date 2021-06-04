<template>
  <div v-if="productImages && productImages.length !== 0">
    <MDBListGroup>
      <LoadedImagesListItem
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

import LoadedImagesListItem from '@/components/admin-layout/product/ProductInputs/ProductImagesInput/LoadedImagesListItem.vue'
import { useStore } from '@/store'
import { ProductImagesItem } from '@/types/product'

export default defineComponent({
  name: 'LoadedImagesList',
  components: {
    LoadedImagesListItem,
    MDBListGroup,
  },
  setup() {
    const store = useStore()
    const productImages: ComputedRef<ProductImagesItem[]> = computed(() => {
      return store.getters.getProductImages
    })
    return { productImages }
  },
})
</script>

<style scoped lang="scss"></style>
