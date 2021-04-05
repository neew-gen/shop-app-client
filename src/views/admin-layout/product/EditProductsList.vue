<template>
  <EditListSuspense entity="product" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditListSuspense from '@/components/admin-layout/EditList/EditListSuspense.vue'

export default defineComponent({
  name: 'EditProductsList',
  components: { EditListSuspense }
})
</script>

<style scoped lang="scss"></style>
