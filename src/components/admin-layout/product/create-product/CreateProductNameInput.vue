<template>
  <InputWithErrorField
    :input-value="productName"
    input-label="Product Name"
    @updateInput="updateProductName"
    type="text"
  />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

import InputWithErrorField from '@/components/shared/InputWithErrorField/InputWithErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'CreateProductNameInput',
  components: { InputWithErrorField },
  setup() {
    const store = useStore()

    const productName: ComputedRef<string> = computed(() => {
      if (!store.getters.getCreateProductName) return ''
      return store.getters.getCreateProductName
    })

    const updateProductName = (e: string): void => {
      store.dispatch('updateCreateProductName', e)
    }
    return { productName, updateProductName }
  },
})
</script>

<style scoped lang="scss"></style>
