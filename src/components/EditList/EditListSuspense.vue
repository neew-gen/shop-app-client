<template>
  <Suspense><EditList :entity="entity"/></Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditList from '@/components/EditList/EditList.vue'

export default defineComponent({
  name: 'EditListSuspense',
  props: {
    entity: {
      type: String,
      required: true
    }
  },
  components: { EditList }
})
</script>

<style scoped lang="scss"></style>
