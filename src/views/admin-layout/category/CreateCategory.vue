<template>
  <MDBContainer>
    <MDBRow
      tag="form"
      class="g-3 needs-validation"
      novalidate
      @submit.prevent="addCategory"
    >
      <div class="d-flex justify-content-center mb-2">
        <ImageContainer
          height="180px"
          width="180px"
          :name="state.name"
          :img-url="state.imgUrl"
        />
      </div>
      <MDBCol col="12">
        <MDBInput
          label="Category Name"
          v-model="state.name"
          invalidFeedback="Please enter the name."
          required
        />
      </MDBCol>
      <MDBCol col="12">
        <MDBInput
          label="Image Url"
          type="text"
          v-model="state.imgUrl"
          invalidFeedback="Please enter the image Url."
          required
        />
      </MDBCol>
      <MDBCol col="12" class="d-flex justify-content-between">
        <MDBDropdown align="start" v-model="showDropdown">
          <MDBDropdownToggle
            class="category-dropdown"
            @click="showDropdown = !showDropdown"
          >
            Visibility:
            {{ state.isPublic === true ? 'Public' : 'Hidden' }}
          </MDBDropdownToggle>
          <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
            <MDBDropdownItem
              class="dropdown-item"
              @click="changeIsPublic(false)"
            >
              Hidden
            </MDBDropdownItem>
            <MDBDropdownItem
              class="dropdown-item"
              @click="changeIsPublic(true)"
            >
              Public
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <MDBBtn color="light" type="submit">
          Add Category
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  reactive,
  ref,
  ComponentPublicInstance
} from 'vue'
import {
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-vue-ui-kit'
// import { useStore } from '@/store'
import ImageContainer from '@/components/ImageContainer.vue'
const INITIAL_STATE = {
  id: '',
  name: '',
  imgUrl: '',
  isPublic: true
}

export default defineComponent({
  name: 'CreateCategory',
  components: {
    MDBInput,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    ImageContainer,
    MDBRow,
    MDBCol,
    MDBContainer
  },
  setup() {
    // const store = useStore()
    // const toast: any = inject('toast')
    // const showDropdown = ref(false)
    //
    // const state = reactive({ ...INITIAL_STATE })
    // const resetState = (): void => {
    //   Object.assign(state, { ...INITIAL_STATE })
    // }
    //
    // const changeIsPublic = (newValue: boolean): void => {
    //   state.isPublic = newValue
    //   showDropdown.value = false
    // }
    //
    // const addCategory = (e: any): void => {
    //   e.target.classList.add('was-validated')
    //   if (state.name && state.imgUrl) {
    //     const unboundData = Object.assign({}, state)
    //     store.dispatch('createCategory', unboundData)
    //     resetState()
    //     toast.success('Category has been created!')
    //     e.target.classList.remove('was-validated')
    //   }
    // }
    // return { showDropdown, state, changeIsPublic, addCategory }
  }
})
</script>

<style scoped lang="scss"></style>
