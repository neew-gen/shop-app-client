<template>
  <Breadcrumb title="Каталог" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'
export default defineComponent({
  name: 'Catalog',
  components: {
    Breadcrumb
  }
})
</script>

<style lang="scss" scoped></style>
