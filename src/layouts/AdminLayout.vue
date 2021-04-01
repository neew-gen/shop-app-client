<template>
  <Breadcrumb />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'

export default defineComponent({
  name: 'AdminLayout',
  components: {
    Breadcrumb
  }
})
</script>

<style scoped lang="scss"></style>
