<template>
  <TextAreaWithErrorField
    text-area-label="Product Description"
    :text-area-value="productDescription"
    type="text"
    @updateTextArea="updateProductDescription"
  />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

import TextAreaWithErrorField from '@/components/shared/TextAreaWithErrorField/TextAreaWithErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'CreateProductDescriptionInput',
  props: {
    error: {
      type: String,
    },
  },
  components: {
    TextAreaWithErrorField,
  },
  setup() {
    const store = useStore()

    const productDescription: ComputedRef<string> = computed(() => {
      if (!store.getters.getCreateProductDescription) return ''
      return store.getters.getCreateProductDescription
    })

    const updateProductDescription = (e: string): void => {
      store.dispatch('updateCreateProductDescription', e)
    }
    return { productDescription, updateProductDescription }
  },
})
</script>

<style scoped lang="scss"></style>
