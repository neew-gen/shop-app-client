<template>
  <Suspense>
    <template #default>
      <EditSwipeList />
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spinner from '@/components/Spinner.vue'
import EditSwipeList from '@/components/admin-layout/EditSwipeList/EditSwipeList.vue'

export default defineComponent({
  name: 'EditSwipeListSuspense',
  components: { EditSwipeList, Spinner },
})
</script>

<style scoped lang="scss"></style>
