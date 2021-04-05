<template>
  <Suspense>
    <template #default>
      <EditList :entity="entity" />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditList from '@/components/admin-layout/EditList/EditList.vue'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'EditListSuspense',
  props: {
    entity: {
      type: String,
      required: true
    }
  },
  components: { Spinner, EditList }
})
</script>

<style scoped lang="scss"></style>
