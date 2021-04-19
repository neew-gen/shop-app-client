<template>
  <Suspense>
    <template #default>
      <EditCategory :id="id" />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditCategory from '@/components/admin-layout/EditItem/EditCategory.vue'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'EditCategorySuspense',
  components: { EditCategory, Spinner },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
