<template>
  <div>
    <Suspense>
      <CategoryDropdown />
    </Suspense>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="name"
        aria-label="name"
        aria-describedby="basic-addon2"
        v-model="state.name"
      />
      <span class="input-group-text" id="basic-addon2">name</span>
    </div>

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
      <button
        class="btn btn-success shadow-none"
        type="button"
        @click="addProduct()"
      >
        Add Product
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onUnmounted, reactive } from 'vue'
import { useStore } from '@/store'
import CategoryDropdown from '@/components/CategoryDropdown.vue'
import { CategoryIdType, EventBus, Subject } from '@/types/eventBus'

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
    CategoryDropdown
  },
  setup() {
    const store = useStore()
    const toast: any = inject('toast')
    const eventBus: any = inject('eventBus')

    const state = reactive({ ...INITIAL_STATE })
    const resetState = (): void => {
      Object.assign(state, { ...INITIAL_STATE })
      eventBus.publish('parentUpdateCategory', state.categoryId)
    }

    eventBus.subscribe('childUpdateCategory', (categoryId: CategoryIdType) => {
      state.categoryId = categoryId
    })

    const addProduct = (): void => {
      const unboundData = Object.assign({}, state)
      store.dispatch('createProduct', unboundData)
      resetState()
      toast.success('Product has been created!')
    }

    onUnmounted(() => {
      eventBus.unsubscribe('childUpdateCategory')
    })
    return { state, addProduct }
  }
})
</script>

<style scoped lang="scss"></style>
