<template>
  <MDBCol col="12">
    <MDBInput label="Product Price" type="number" v-model="productPrice" />
    <ErrorField v-if="error">{{ error }}</ErrorField>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBInput } from 'mdb-vue-ui-kit'
import { computed, defineComponent, WritableComputedRef } from 'vue'

import ErrorField from '@/components/ErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'ProductPriceInput',
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
    // productPrice is a number, but i need to convert it to string bcs field works better that way
    const productPrice: WritableComputedRef<string> = computed({
      get(): string {
        if (!store.getters.getCreateProductPrice) return ''
        return store.getters.getCreateProductPrice.toString()
      },
      set(newValue: string): void {
        store.dispatch('updateCreateProductPrice', Number(newValue))
      },
    })
    return { productPrice }
  },
})
</script>

<style scoped lang="scss"></style>
