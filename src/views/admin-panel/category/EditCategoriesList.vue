<template>
  <EditListSuspense entity="category" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditListSuspense from '@/components/EditList/EditListSuspense.vue'

export default defineComponent({
  name: 'EditCategoriesList',
  components: { EditListSuspense }
})
</script>

<style scoped lang="scss"></style>
