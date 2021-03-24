<template>
  <NavbarWithBackButton title="Admin Panel" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarWithBackButton from '@/components/NavbarWithBackButton.vue'

export default defineComponent({
  name: 'AdminPage',
  components: {
    NavbarWithBackButton
  }
})
</script>

<style scoped lang="scss"></style>
