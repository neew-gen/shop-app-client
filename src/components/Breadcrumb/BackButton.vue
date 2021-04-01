<template>
  <MDBBtn outline="dark" @click="goBack"
    ><img class="button-back-image" src="@/assets/back-button/back.svg" alt=""
  /></MDBBtn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBBtn } from 'mdb-vue-ui-kit'
import router from '@/router'

export default defineComponent({
  name: 'BackButton',
  components: {
    MDBBtn
  },
  setup() {
    const goBack = (): void => {
      router.back()
    }
    return {
      goBack
    }
  }
})
</script>

<style scoped lang="scss">
.btn {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn:focus {
  background: transparent;
}
.button-back-image {
  height: 100%;
}
</style>
