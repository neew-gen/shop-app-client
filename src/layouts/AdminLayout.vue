<template>
  <AdminBreadcrumb />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/AdminBreadcrumb.vue'
import AdminBreadcrumb from '@/components/admin-layout/AdminBreadcrumb/AdminBreadcrumb.vue'

export default defineComponent({
  name: 'AdminLayout',
  components: { AdminBreadcrumb },
})
</script>

<style scoped lang="scss"></style>
