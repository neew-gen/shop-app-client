<template>
  <MDBCol col="12">
    <MDBTextarea
      class="mt-2"
      :label="textAreaLabel"
      rows="4"
      v-model="textAreaModel"
      :type="type"
    />
    <ErrorField v-if="error">{{ error }}</ErrorField>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBTextarea } from 'mdb-vue-ui-kit'
import { computed, defineComponent, WritableComputedRef } from 'vue'

import ErrorField from '@/components/shared/ErrorField.vue'

export default defineComponent({
  name: 'TextAreaWithErrorField',
  props: ['textAreaValue', 'textAreaLabel', 'error', 'type'],
  components: {
    MDBCol,
    ErrorField,
    MDBTextarea,
  },
  emits: ['updateTextArea'],
  setup(props, { emit }) {
    const textAreaModel: WritableComputedRef<string> = computed({
      get(): string {
        return props.textAreaValue
      },
      set(newValue: string): void {
        emit('updateTextArea', newValue)
      },
    })
    return { textAreaModel }
  },
})
</script>

<style scoped lang="scss"></style>
