<template>
  <CatalogBreadcrumb />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CatalogBreadcrumb from '@/components/public-layout/PublicBreadcrumbs/CatalogBreadcrumb.vue'

export default defineComponent({
  name: 'catalog',
  components: {
    CatalogBreadcrumb,
  },
})
</script>

<style lang="scss" scoped></style>
