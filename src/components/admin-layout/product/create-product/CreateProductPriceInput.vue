<template>
  <InputWithErrorField
    :input-value="productPrice"
    input-label="Product Price"
    @updateInput="updateProductPrice"
    type="number"
  />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

import InputWithErrorField from '@/components/shared/InputWithErrorField/InputWithErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'CreateProductPriceInput',
  props: {
    error: {
      type: String,
    },
  },
  components: {
    InputWithErrorField,
  },
  setup() {
    const store = useStore()
    // productPrice is a number, but i need to convert it to string bcs field works better that way

    const productPrice: ComputedRef<string> = computed(() => {
      if (!store.getters.getCreateProductPrice) return ''
      return store.getters.getCreateProductPrice.toString()
    })

    const updateProductPrice = (e: string): void => {
      store.dispatch('updateCreateProductPrice', Number(e))
    }
    return { productPrice, updateProductPrice }
  },
})
</script>

<style scoped lang="scss"></style>
