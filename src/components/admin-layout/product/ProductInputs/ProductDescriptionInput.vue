<template>
  <MDBCol col="12">
    <MDBTextarea
      label="Product Description"
      rows="4"
      v-model="productDescription"
    />
    <ErrorField v-if="error">{{ error }}</ErrorField>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBTextarea } from 'mdb-vue-ui-kit'
import { computed, defineComponent, WritableComputedRef } from 'vue'

import ErrorField from '@/components/ErrorField.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'ProductDescriptionInput',
  props: {
    error: {
      type: String,
    },
  },
  components: {
    MDBCol,
    MDBTextarea,
    ErrorField,
  },
  setup() {
    const store = useStore()
    const productDescription: WritableComputedRef<string> = computed({
      get(): string {
        return store.getters.getProductDescription
      },
      set(newValue: string): void {
        store.dispatch('updateProductDescription', newValue)
      },
    })
    return { productDescription }
  },
})
</script>

<style scoped lang="scss"></style>
