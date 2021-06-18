<template>
  <MDBCol col="12">
    <MDBInput
      class="mt-2"
      :label="inputLabel"
      v-model="inputModel"
      :type="type"
    />
    <ErrorField>{{ error }}</ErrorField>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBInput } from 'mdb-vue-ui-kit'
import { computed, defineComponent, WritableComputedRef } from 'vue'

import ErrorField from '@/components/shared/ErrorField.vue'

export default defineComponent({
  name: 'InputWithErrorField',
  props: ['inputValue', 'inputLabel', 'error', 'type'],
  components: {
    MDBCol,
    ErrorField,
    MDBInput,
  },
  emits: ['updateInput'],
  setup(props, { emit }) {
    const inputModel: WritableComputedRef<string> = computed({
      get(): string {
        return props.inputValue
      },
      set(newValue: string): void {
        emit('updateInput', newValue)
      },
    })
    return { inputModel }
  },
})
</script>

<style scoped lang="scss"></style>
