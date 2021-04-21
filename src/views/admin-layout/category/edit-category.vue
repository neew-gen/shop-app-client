<template>
  <Suspense>
    <template #default>
      <EditCategoryTemplate :id="id" />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EditCategoryTemplate from '@/components/admin-layout/category/edit-category/EditCategoryTemplate.vue'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'edit-category',
  components: { EditCategoryTemplate, Spinner },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
