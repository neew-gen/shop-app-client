<template>
  <MDBCol col="12" class="d-flex justify-content-between align-items-center">
    <div>Show the product:</div>
    <MDBSwitch v-model="productShow" />
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBSwitch } from 'mdb-vue-ui-kit'
import { computed, defineComponent, WritableComputedRef } from 'vue'

import { useStore } from '@/store'

export default defineComponent({
  name: 'CreateProductShowInput',
  components: {
    MDBSwitch,
    MDBCol,
  },
  setup() {
    const store = useStore()

    const productShow: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return store.getters.getCreateProductShow
      },
      set(newValue: boolean): void {
        store.dispatch('updateCreateProductShow', newValue)
      },
    })

    return {
      productShow,
    }
  },
})
</script>

<style scoped lang="scss">
.show-toggle {
  width: 93px;
}
</style>
