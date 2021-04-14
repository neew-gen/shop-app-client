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
      <MDBBtn color="light" @click="updateProduct()">Save changes</MDBBtn>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onUnmounted,
  inject,
  onMounted,
  ref
} from 'vue'
import { MDBInput, MDBTextarea, MDBBtn } from 'mdb-vue-ui-kit'
import { assignFieldsForReactive } from '@/helpers'
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import { GET_PRODUCT_BY_ID } from '@/api/graphql-api/queries/productQueries'
import { ProductType } from '@/types/product'
// import { useStore } from '@/store'
import { CategoryIdType } from '@/types/eventBus'
import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown.vue'
import CategoryDropdownFallback from '@/components/CategoryDropdown/CategoryDropdownFallback.vue'
import router from '@/router'
import ImageContainer from '@/components/ImageContainer.vue'

export default defineComponent({
  name: 'EditProduct',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    CategoryDropdown,
    CategoryDropdownFallback,
    MDBInput,
    MDBTextarea,
    MDBBtn,
    ImageContainer
  },
  async setup(props) {
    // const store = useStore()
    const toast: any = inject('toast')
    const eventBus: any = inject('eventBus')
    const showContent = ref(false)

    const state = reactive({
      categoryId: '',
      name: '',
      imgUrl: '',
      price: '',
      description: ''
    })

    onMounted(() => {
      eventBus.subscribe(
        'childUpdateCategory',
        (categoryId: CategoryIdType) => {
          // console.log('edit subs')
          state.categoryId = categoryId
        }
      )

      eventBus.publish('parentUpdateCategory', state.categoryId)
    })
    onUnmounted(() => {
      eventBus.unsubscribe('childUpdateCategory')
    })

    await GraphqlApi.fetchById<ProductType>(GET_PRODUCT_BY_ID, props.id)
      .then((fetchedData: any) => {
        assignFieldsForReactive(state, fetchedData)
        showContent.value = true
      })
      .catch(() => {
        router.back()
      })

    const updateProduct = (): void => {
      // store.dispatch('updateProduct', { id: props.id, updateData: state })
      toast.success('Product has been updated!')
    }
    // const removeProduct = (): void => {
    //   // ProductApi.removeProduct(props.id)
    //   toast.error('Product has been deleted!')
    //   // does not allow us to return to the deleted product page
    //   router.replace({ path: '/admin-panel/edit-products' })
    // }
    return {
      showContent,
      state,
      updateProduct
    }
  }
})
</script>

<style scoped lang="scss"></style>
