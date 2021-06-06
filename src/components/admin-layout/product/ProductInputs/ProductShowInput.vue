<template>
  <MDBCol col="12" class="d-flex justify-content-between align-items-center">
    <div>Show the product:</div>
    <MDBSwitch v-model="productShow" />
    <!--    <MDBDropdown :align="'end'" v-model="showDropdown">-->
    <!--      <MDBDropdownToggle-->
    <!--        class="show-toggle"-->
    <!--        @click="showDropdown = !showDropdown"-->
    <!--      >-->
    <!--        {{ productShow }}-->
    <!--      </MDBDropdownToggle>-->
    <!--      <MDBDropdownMenu aria-labelledby="dropdownMenuButton">-->
    <!--        <MDBDropdownItem-->
    <!--          class="dropdown-item"-->
    <!--          @mouseup="changeProductShow(true)"-->
    <!--        >-->
    <!--          True-->
    <!--        </MDBDropdownItem>-->
    <!--        <MDBDropdownItem-->
    <!--          class="dropdown-item"-->
    <!--          @mouseup="changeProductShow(false)"-->
    <!--        >-->
    <!--          False-->
    <!--        </MDBDropdownItem>-->
    <!--      </MDBDropdownMenu>-->
    <!--    </MDBDropdown>-->
  </MDBCol>
</template>

<script lang="ts">
import {
  MDBCol,
  // MDBDropdown,
  // MDBDropdownItem,
  // MDBDropdownMenu,
  // MDBDropdownToggle,
  MDBSwitch,
} from 'mdb-vue-ui-kit'
import {
  computed,
  // ComputedRef,
  defineComponent,
  ref,
  WritableComputedRef,
} from 'vue'

import { useStore } from '@/store'

export default defineComponent({
  name: 'ProductShowInput',
  components: {
    MDBSwitch,
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
    // MDBDropdownItem,
    MDBCol,
  },
  setup() {
    const store = useStore()
    const showDropdown = ref(false)

    // const productShow: ComputedRef<boolean> = computed(
    //   () => store.getters.getProductShow,
    // )
    const productShow: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return store.getters.getCreateProductShow
      },
      set(newValue: boolean): void {
        store.dispatch('updateCreateProductShow', newValue)
      },
    })

    // const changeProductShow = (newValue: boolean): void => {
    //   store.dispatch('updateProductShow', newValue)
    //   showDropdown.value = false
    // }
    return {
      showDropdown,
      productShow,
      // changeProductShow,
    }
  },
})
</script>

<style scoped lang="scss">
.show-toggle {
  width: 93px;
}
</style>
