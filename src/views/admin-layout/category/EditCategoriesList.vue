<template>
  <EditList entity="category" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditList from '@/components/admin-layout/EditList/EditList.vue'

export default defineComponent({
  name: 'EditCategoriesList',
  components: { EditList },
})
</script>

<style scoped lang="scss"></style>
