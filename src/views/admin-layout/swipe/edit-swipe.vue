<template>
  <Suspense>
    <template #default>
      <EditSwipeTemplate :id="id" />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EditSwipeTemplate from '@/components/admin-layout/swipe/edit-swipe/EditSwipeTemplate.vue'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'edit-swipe',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    EditSwipeTemplate,
    Spinner,
  },
})
</script>

<style scoped lang="scss"></style>
