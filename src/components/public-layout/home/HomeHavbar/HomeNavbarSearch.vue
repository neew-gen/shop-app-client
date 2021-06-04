<template>
  <div class="search-input-wrapper flex-fill">
    <MDBInput
      v-model="searchInput"
      class="search-input"
      label=""
      @input="startSearch"
    />
  </div>
</template>

<script lang="ts">
import { debounce } from 'lodash'
import { MDBInput } from 'mdb-vue-ui-kit'
import { defineComponent, ref } from 'vue'

import { useStore } from '@/store'

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
  setup() {
    const searchInput = ref('')
    const store = useStore()
    const startSearch = debounce(() => {
      store.dispatch('startSearch', searchInput.value)
    }, 1000)
    return { searchInput, startSearch }
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
