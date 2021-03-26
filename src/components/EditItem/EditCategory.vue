<template>
  <div class="d-flex flex-column">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Please enter a name"
        aria-label="name"
        aria-describedby="basic-addon1"
        v-model="state.name"
      />
      <span class="input-group-text" id="basic-addon1">Name</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Please enter a image url"
        aria-label="img"
        aria-describedby="basic-addon2"
        v-model="state.imgUrl"
      />
      <span class="input-group-text" id="basic-addon2">Image Url</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="btn-group">
        <button
          class="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category visibility:
          {{ state.isPublic === true ? 'Public' : 'Hidden' }}
        </button>
        <ul class="dropdown-menu dropdown-menu-start">
          <li class="dropdown-item" @click="changeIsPublic(false)">Hidden</li>
          <li class="dropdown-item" @click="changeIsPublic(true)">Public</li>
        </ul>
      </div>
      <div>
        <button class="btn btn-warning" type="button" @click="updateCategory()">
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject } from 'vue'
// import { ProductApi } from '@/api/product.api'
import { assignFieldsForReactive } from '@/helpers'
import router from '@/router'
import { GraphqlApi } from '@/api/GraphqlApi'
import { GET_CATEGORY_BY_ID } from '@/api/queries/categoryQueries'
import { CategoryType } from '@/types/category'

export default defineComponent({
  name: 'EditCategory',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    const toast: any = inject('toast')
    const state = reactive({
      name: '',
      imgUrl: '',
      isPublic: false
    })
    const fetchedData = await GraphqlApi.fetchById<CategoryType>(
      GET_CATEGORY_BY_ID,
      props.id
    )
    assignFieldsForReactive(state, fetchedData)

    const changeIsPublic = (newValue: boolean): void => {
      state.isPublic = newValue
    }

    const updateCategory = (): void => {
      GraphqlApi.updateCategory(props.id, state)
      toast.success('Category has been updated!')
    }
    // const removeProduct = (): void => {
    //   ProductApi.removeProduct(props.id)
    //   toast.error('Product has been deleted!')
    //   // does not allow us to return to the deleted product page
    //   router.replace({ path: '/admin-panel/edit-products' })
    // }
    return {
      state,
      changeIsPublic,
      updateCategory
      // removeProduct
    }
  }
})
</script>

<style scoped lang="scss"></style>
