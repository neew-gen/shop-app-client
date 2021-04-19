<template>
  <div v-if="showContent">
    <div class="d-flex justify-content-center mb-2">
      <ImageContainer
        height="180px"
        width="180px"
        :name="state.name"
        :img-url="state.imgUrl"
      />
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
      <MDBBtn color="light" @click="updateCategory()">Save changes</MDBBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref } from 'vue'
import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput,
} from 'mdb-vue-ui-kit'
import { assignFieldsForReactive } from '@/helpers'
import router from '@/router'
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORY_BY_ID } from '@/api/graphql-api/queries/categoryQueries'
import { CategoryType } from '@/types/category'
import ImageContainer from '@/components/ImageContainer.vue'

export default defineComponent({
  name: 'EditCategory',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    MDBInput,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBBtn,
    MDBDropdownItem,
    ImageContainer,
  },
  async setup(props) {
    // const store = useStore()
    const toast: any = inject('toast')
    const showDropdown = ref(false)
    const showContent = ref(false)

    const state = reactive({
      name: '',
      imgUrl: '',
      isPublic: false,
    })
    await GraphqlApi.fetchById<CategoryType>(GET_CATEGORY_BY_ID, props.id)
      .then((fetchedData) => {
        assignFieldsForReactive(state, fetchedData)
        showContent.value = true
      })
      .catch(() => {
        router.back()
      })

    const changeIsPublic = (newValue: boolean): void => {
      showDropdown.value = false
      state.isPublic = newValue
    }

    const updateCategory = (): void => {
      // store.dispatch('updateCategory', { id: props.id, updateData: state })
      toast.success('Category has been updated!')
    }
    return {
      state,
      changeIsPublic,
      updateCategory,
      showDropdown,
      showContent,
    }
  },
})
</script>

<style scoped lang="scss"></style>
