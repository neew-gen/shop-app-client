<template>
  <div>
    <CatalogBreadcrumb />
    <div class="router-container">
      <router-view />
    </div>
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

<style lang="scss" scoped>
.router-container {
  padding-top: 55px;
}
</style>
