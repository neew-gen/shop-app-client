<template>
  <Suspense>
    <template #default>
      <EditProductTemplate :id="id" />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EditProductTemplate from '@/components/admin-layout/product/edit-product/EditProductTemplate.vue'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'edit-product',
  components: {
    Spinner,
    EditProductTemplate,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
