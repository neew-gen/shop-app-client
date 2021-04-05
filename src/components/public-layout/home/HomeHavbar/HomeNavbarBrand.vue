<template>
  <router-link class="brand" to="/">
    <h1 class="brand__title">Shop App</h1>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBIcon } from 'mdb-vue-ui-kit'

export default defineComponent({
  name: 'HomeNavbarBrand',
  components: {}
})
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'adam';
  src: url('../../../../assets/fonts/Adam.ttf') format('truetype');
}
.brand {
  font-family: 'adam', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 110px;
  margin-right: 20px;
  &__title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
    color: #4f4f4f;
  }
}
</style>
