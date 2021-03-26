<template>
  <Suspense>
    <EditProduct :id="id" />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditProduct from '@/components/EditItem/EditProduct.vue'

export default defineComponent({
  name: 'EditProductSuspense',
  components: { EditProduct },
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss"></style>
