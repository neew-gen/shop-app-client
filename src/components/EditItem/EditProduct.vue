<template>
  <div class="d-flex flex-column">
    <div class="align-self-end m-1">
      <Suspense>
        <CategoryDropdown />
      </Suspense>
    </div>

    <div class="mb-3">
      <label for="nameInput" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="nameInput"
        placeholder="Please enter the name"
        v-model="state.name"
      />
    </div>
    <!--    <div class="input-group mb-3">-->
    <!--      <input-->
    <!--        type="text"-->
    <!--        class="form-control"-->
    <!--        placeholder="name"-->
    <!--        aria-label="name"-->
    <!--        aria-describedby="basic-addon2"-->
    <!--        -->
    <!--      />-->
    <!--      <span class="input-group-text" id="basic-addon2">name</span>-->
    <!--    </div>-->
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="img"
        aria-label="img"
        aria-describedby="basic-addon3"
        v-model="state.imgUrl"
      />
      <span class="input-group-text" id="basic-addon3">img</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="price"
        aria-label="price"
        aria-describedby="basic-addon4"
        v-model="state.price"
      />
      <span class="input-group-text" id="basic-addon4">price</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="description"
        aria-label="description"
        aria-describedby="basic-addon5"
        v-model="state.description"
      />
      <span class="input-group-text" id="basic-addon5">description</span>
    </div>
    <div class="d-flex justify-content-end">
      <!--      <button class="btn btn-danger" type="button" @click="removeProduct()">-->
      <!--        Delete product-->
      <!--      </button>-->
      <button
        class="btn btn-warning shadow-none"
        type="button"
        @click="updateProduct()"
      >
        Edit product
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onUnmounted, inject, onMounted } from 'vue'
import { assignFieldsForReactive } from '@/helpers'
import { GraphqlApi } from '@/api/GraphqlApi'
import { GET_PRODUCT_BY_ID } from '@/api/queries/productQueries'
import { ProductType } from '@/types/product'
import { useStore } from '@/store'
import { CategoryIdType } from '@/types/eventBus'
import CategoryDropdown from '@/components/CategoryDropdown.vue'

export default defineComponent({
  name: 'EditProduct',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    CategoryDropdown
  },
  async setup(props) {
    const store = useStore()
    const toast: any = inject('toast')
    const eventBus: any = inject('eventBus')

    const state = reactive({
      categoryId: '',
      name: '',
      imgUrl: '',
      price: '',
      description: ''
    })
    GraphqlApi.fetchById<ProductType>(GET_PRODUCT_BY_ID, props.id).then(
      fetchedData => {
        assignFieldsForReactive(state, fetchedData)
        eventBus.publish('parentUpdateCategory', fetchedData.categoryId)
        console.log('edit publ')
      }
    )
    onMounted(() => {
      eventBus.subscribe(
        'childUpdateCategory',
        (categoryId: CategoryIdType) => {
          console.log('edit subs')
          state.categoryId = categoryId
        }
      )
    })

    const updateProduct = (): void => {
      console.log(state)
      store.dispatch('updateProduct', { id: props.id, updateData: state })
      toast.success('Product has been updated!')
    }
    // const removeProduct = (): void => {
    //   // ProductApi.removeProduct(props.id)
    //   toast.error('Product has been deleted!')
    //   // does not allow us to return to the deleted product page
    //   router.replace({ path: '/admin-panel/edit-products' })
    // }
    onUnmounted(() => {
      eventBus.unsubscribe('childUpdateCategory')
    })
    return {
      state,
      updateProduct
    }
  }
})
</script>

<style scoped lang="scss"></style>
