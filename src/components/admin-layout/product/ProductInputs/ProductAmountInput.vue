<template>
  <MDBCol col="12">
    <MDBInput label="Product Amount" type="number" v-model="productAmount" />
    <ErrorField v-if="error">{{ error }}</ErrorField>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBInput } from 'mdb-vue-ui-kit'
import { computed, defineComponent, WritableComputedRef } from 'vue'

import ErrorField from '@/components/ErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'ProductAmountInput',
  props: {
    error: {
      type: String,
    },
  },
  components: {
    MDBCol,
    MDBInput,
    ErrorField,
  },
  setup() {
    const store = useStore()
    // productCount is a number, but i need to convert it to string bcs field works better that way
    const productAmount: WritableComputedRef<string> = computed({
      get(): string {
        return store.getters.getProductAmount.toString()
      },
      set(newValue: string): void {
        store.dispatch('updateProductAmount', Number(newValue))
      },
    })
    return { productAmount }
  },
})
</script>

<style scoped lang="scss"></style>
