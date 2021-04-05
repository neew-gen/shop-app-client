<template>
  <Suspense>
    <template #default>
      <EditSwipe :id="id" />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spinner from '@/components/Spinner.vue'
import EditSwipe from '@/components/admin-layout/EditItem/EditSwipe.vue'

export default defineComponent({
  name: 'EditSwipeSuspense',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    EditSwipe,
    Spinner
  }
})
</script>

<style scoped lang="scss"></style>
