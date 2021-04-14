<template>
  <div>
    <div class="d-flex justify-content-center mb-2">
      <ImageContainer
        height="180px"
        width="180px"
        :name="state.name"
        :img-url="state.imgUrl"
      />
    </div>
    <div class="d-flex justify-content-between align-items-center p-1 mb-1">
      <div>Category:</div>
      <Suspense>
        <template #default>
          <CategoryDropdown />
        </template>
        <template #fallback>
          <CategoryDropdownFallback />
        </template>
      </Suspense>
    </div>
    <MDBInput class="mb-2" label="Product Name" v-model="state.name" />
    <MDBInput
      class="mb-2"
      label="Image Url"
      type="url"
      v-model="state.imgUrl"
    />
    <MDBInput class="mb-2" label="Price" type="number" v-model="state.price" />
    <MDBTextarea
      class="mb-2"
      label="Description"
      rows="4"
      v-model="state.description"
    />
    <div class="d-flex justify-content-end m-1">
      <MDBBtn color="light" @click="addProduct()">Add Product</MDBBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onUnmounted, reactive } from 'vue'
import { MDBInput, MDBTextarea, MDBBtn } from 'mdb-vue-ui-kit'
// import { useStore } from '@/store'
import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown.vue'
import { CategoryIdType } from '@/types/eventBus'
import CategoryDropdownFallback from '@/components/CategoryDropdown/CategoryDropdownFallback.vue'
import ImageContainer from '@/components/ImageContainer.vue'

const INITIAL_STATE = {
  id: '',
  categoryId: '',
  name: '',
  imgUrl: '',
  price: '',
  description: ''
}

export default defineComponent({
  name: 'CreateProduct',
  components: {
    CategoryDropdown,
    CategoryDropdownFallback,
    MDBInput,
    MDBTextarea,
    MDBBtn,
    ImageContainer
  },
  setup() {
    // const store = useStore()
    // const toast: any = inject('toast')
    // const eventBus: any = inject('eventBus')
    //
    // const state = reactive({ ...INITIAL_STATE })
    // const resetState = (): void => {
    //   Object.assign(state, { ...INITIAL_STATE })
    //   eventBus.publish('parentUpdateCategory', state.categoryId)
    // }
    //
    // eventBus.subscribe('childUpdateCategory', (categoryId: CategoryIdType) => {
    //   state.categoryId = categoryId
    // })
    //
    // const addProduct = (): void => {
    //   const unboundData = Object.assign({}, state)
    //   store.dispatch('createProduct', unboundData)
    //   resetState()
    //   toast.success('Product has been created!')
    // }
    //
    // onUnmounted(() => {
    //   eventBus.unsubscribe('childUpdateCategory')
    // })
    // return { state, addProduct }
  }
})
</script>

<style scoped lang="scss"></style>
