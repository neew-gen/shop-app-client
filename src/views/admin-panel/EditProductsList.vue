<template>
  <Suspense><EditList /></Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditList from '@/components/EditList/index.vue'

export default defineComponent({
  name: 'EditProductsList',
  components: { EditList }
})
</script>

<style scoped lang="scss"></style>
