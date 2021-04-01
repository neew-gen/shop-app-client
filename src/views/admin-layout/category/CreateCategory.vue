<template>
  <div>
    <div class="d-flex justify-content-center mb-2">
      <ImageContainer size="180px" :name="state.name" :img-url="state.imgUrl" />
    </div>
    <MDBInput class="mb-2 mt-2" label="Category Name" v-model="state.name" />
    <MDBInput
      class="mb-2"
      label="Image Url"
      type="url"
      v-model="state.imgUrl"
    />
    <div class="d-flex justify-content-between m-1">
      <MDBDropdown align="start" v-model="showDropdown">
        <MDBDropdownToggle
          class="category-dropdown"
          @click="showDropdown = !showDropdown"
        >
          Visibility:
          {{ state.isPublic === true ? 'Public' : 'Hidden' }}
        </MDBDropdownToggle>
        <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
          <MDBDropdownItem class="dropdown-item" @click="changeIsPublic(false)"
            >Hidden</MDBDropdownItem
          >
          <MDBDropdownItem class="dropdown-item" @click="changeIsPublic(true)"
            >Public</MDBDropdownItem
          >
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBBtn color="light" @click="addCategory()">Add Category</MDBBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref } from 'vue'
import {
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-vue-ui-kit'
import { useStore } from '@/store'
import ImageContainer from '@/components/ImageContainer.vue'
const INITIAL_STATE = {
  id: '',
  name: '',
  imgUrl: '',
  isPublic: false
}

export default defineComponent({
  name: 'CreateCategory',
  components: {
    MDBInput,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBBtn,
    MDBDropdownItem,
    ImageContainer
  },
  setup() {
    const store = useStore()
    const toast: any = inject('toast')
    const showDropdown = ref(false)

    const state = reactive({ ...INITIAL_STATE })
    const resetState = (): void => {
      Object.assign(state, { ...INITIAL_STATE })
    }

    const changeIsPublic = (newValue: boolean): void => {
      state.isPublic = newValue
      showDropdown.value = false
    }

    const addCategory = (): void => {
      const unboundData = Object.assign({}, state)
      store.dispatch('createCategory', unboundData)
      resetState()
      toast.success('Category has been created!')
    }
    return { showDropdown, state, changeIsPublic, addCategory }
  }
})
</script>

<style scoped lang="scss"></style>
