<template>
  <MDBCol col="12">
    <MDBInput label="Product Name" v-model="productName" />
    <ErrorField>{{ error }}</ErrorField>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBInput } from 'mdb-vue-ui-kit'
import { computed, defineComponent, WritableComputedRef } from 'vue'

import ErrorField from '@/components/ErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'ProductNameInput',
  props: {
    error: {
      type: String,
    },
  },
  components: {
    MDBCol,
    ErrorField,
    MDBInput,
  },
  setup() {
    const store = useStore()

    const productName: WritableComputedRef<string> = computed({
      get(): string {
        return store.getters.getProductName
      },
      set(newValue: string): void {
        store.dispatch('updateProductName', newValue)
      },
    })
    return { productName }
  },
})
</script>

<style scoped lang="scss">
.name {
  display: flex;
  align-items: center;
  caret-color: transparent;
}
.invalid-feedback {
  height: 10px;
  width: 100%;
}
</style>
