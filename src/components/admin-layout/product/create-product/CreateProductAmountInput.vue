<template>
  <InputWithErrorField
    :input-value="productAmount"
    input-label="Product Amount"
    @updateInput="updateProductAmount"
    type="number"
  />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

import InputWithErrorField from '@/components/shared/InputWithErrorField/InputWithErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'CreateProductAmountInput',
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

    const productAmount: ComputedRef<string> = computed(() => {
      if (!store.getters.getCreateProductAmount) return ''
      return store.getters.getCreateProductAmount.toString()
    })

    const updateProductAmount = (e: string): void => {
      store.dispatch('updateCreateProductAmount', Number(e))
    }

    return { productAmount, updateProductAmount }
  },
})
</script>

<style scoped lang="scss"></style>
