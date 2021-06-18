<template>
  <div>Product Images</div>
  <CreateProductLoadedImagesList />
  <UploadingImage @modal="(e) => changeModalMode(e)" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import CreateProductLoadedImagesList from '@/components/admin-layout/product/create-product/CreateProductImagesInput/CreateProductLoadedImagesList.vue'
import UploadingImage from '@/components/admin-layout/product/create-product/CreateProductImagesInput/UploadingImage.vue'

export default defineComponent({
  name: 'CreateProductImagesInput',
  components: {
    CreateProductLoadedImagesList,
    UploadingImage,
  },
  props: {
    error: {
      type: String,
    },
  },
  emits: ['modal'],
  setup(props, { emit }) {
    const modalMode = ref(false)
    const changeModalMode = (newValue: boolean): void => {
      modalMode.value = newValue
      emit('modal', newValue)
    }

    return {
      changeModalMode,
    }
  },
})
</script>

<style scoped lang="scss"></style>
