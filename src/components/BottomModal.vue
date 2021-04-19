<template>
  <transition name="fade">
    <div class="modal-background" v-if="show" @click="changeModal(false)" />
  </transition>
  <transition name="enter-bottom">
    <div class="modal-window" v-if="show">
      <div class="modal-window-header p-1">
        <slot name="modal-header"></slot>
      </div>
      <div>
        <slot name="modal-body"></slot>
      </div>
      <div class="modal-window-footer p-1">
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BottomModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    changeModal: {
      type: Function,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.modal-background {
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  z-index: 1100;
}
.modal-window {
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  z-index: 1110;
}
.modal-window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.modal-window-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
//

.enter-bottom-enter-active {
  animation: enter-bottom 0.3s;
}
.enter-bottom-leave-active {
  animation: enter-bottom 0.3s reverse;
}
@keyframes enter-bottom {
  0% {
    bottom: 0;
    transform: translateY(100%);
  }
  100% {
    bottom: 0;
    transform: translateY(0);
  }
}
</style>
