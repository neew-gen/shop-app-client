<template>
  <div class="search-input-wrapper flex-fill">
    <MDBInput class="search-input" label="" />
  </div>
</template>

<script lang="ts">
import { MDBInput } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeNavbarSearch',
  props: {
    fullSize: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    MDBInput,
  },
})
</script>

<style scoped lang="scss">
.search-input-wrapper {
  margin-left: 10px;
}
.form-outline {
  width: 100%;
}
</style>
