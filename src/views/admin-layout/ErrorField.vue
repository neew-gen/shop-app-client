<template>
  <div class="error-field">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorField',
})
</script>

<style scoped lang="scss">
.error-field {
  font-size: 0.8rem;
  color: #f93154;
}
</style>
