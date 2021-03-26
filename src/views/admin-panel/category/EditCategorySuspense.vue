<template>
  <Suspense>
    <EditCategory :id="id" />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditCategory from '@/components/EditItem/EditCategory.vue'

export default defineComponent({
  name: 'EditCategorySuspense',
  components: { EditCategory },
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss"></style>
