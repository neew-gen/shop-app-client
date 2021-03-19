<template>
  <NavbarWithBackButton title="Каталог" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarWithBackButton from '@/components/NavbarWithBackButton.vue'
export default defineComponent({
  name: 'Catalog',
  components: {
    NavbarWithBackButton
  }
})
</script>

<style lang="scss" scoped></style>
