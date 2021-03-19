<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container-fluid">
      <BackButton />
      <h2 class="align-self-center">{{ title }}</h2>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '@/components/BackButton.vue'
export default defineComponent({
  name: 'NavbarWithBackButton',
  components: {
    BackButton
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.navbar {
  height: 54px;
}
</style>
