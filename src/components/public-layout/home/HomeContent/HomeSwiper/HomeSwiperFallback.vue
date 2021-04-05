<template>
  <div class="placeholder-item">
    <div class="placeholder-content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeSwipeFallback'
})
</script>

<style scoped lang="scss">
.placeholder-item {
  height: 300px;
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.placeholder-content {
  height: 30%;
  display: inline;
  line-height: 14px;
  color: #ffffff;
  background-color: rgba(145, 145, 145, 0.58);
}
.placeholder-item::before {
  content: '';
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(
    to right,
    transparent 0%,
    #e8e8e8 50%,
    transparent 100%
  );
  animation: load 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
</style>
