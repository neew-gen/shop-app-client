<template>
  <div>
    <CatalogBreadcrumb />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CatalogBreadcrumb from '@/components/public-layout/PublicBreadcrumbs/CatalogBreadcrumb.vue'

export default defineComponent({
  name: 'Catalog',
  components: {
    CatalogBreadcrumb,
  },
})
</script>

<style lang="scss" scoped></style>
