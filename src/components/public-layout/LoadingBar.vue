<template>
  <div class="meter">
    <span style="width: 100%"><span class="progress"></span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingBar',
})
</script>

<style scoped lang="scss">
.meter {
  height: 5px;
  position: relative;
  background: #ffffff;
  overflow: hidden;
}

.meter span {
  display: block;
  height: 100%;
}

.progress {
  background-color: #1266f1;
  animation: progressBar 4s ease-in-out infinite;
  //animation-fill-mode: both;
}

@keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
