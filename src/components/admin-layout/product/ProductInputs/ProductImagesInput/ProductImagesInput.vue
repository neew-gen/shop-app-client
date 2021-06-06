<template>
  <div>Product Images</div>
  <LoadedImagesList />
  <UploadingImage @modal="(e) => changeModalMode(e)" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoadedImagesList from '@/components/admin-layout/product/ProductInputs/ProductImagesInput/LoadedImagesList.vue'
import UploadingImage from '@/components/admin-layout/product/ProductInputs/ProductImagesInput/UploadingImage.vue'

export default defineComponent({
  name: 'ProductImagesInput',
  components: {
    LoadedImagesList,
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
