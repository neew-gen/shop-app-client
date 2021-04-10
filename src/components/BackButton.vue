<template>
  <MDBBtn outline="dark" @click="goBack"
    ><MDBIcon icon="chevron-left" iconStyle="fas"
  /></MDBBtn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBBtn, MDBIcon } from 'mdb-vue-ui-kit'
import router from '@/router'

export default defineComponent({
  name: 'BackButton',
  components: {
    MDBBtn,
    MDBIcon
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
