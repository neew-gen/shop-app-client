<template>
  <Suspense>
    <template #default>
      <EditProduct :id="id" />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditProduct from '@/components/admin-layout/EditItem/EditProduct.vue'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'EditProductSuspense',
  components: { Spinner, EditProduct },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
