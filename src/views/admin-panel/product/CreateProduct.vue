<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="category"
        aria-label="category"
        aria-describedby="basic-addon1"
        v-model="state.category"
      />
      <span class="input-group-text" id="basic-addon1">category</span>
    </div>

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
      <button class="btn btn-success" type="button" @click="addProduct()">
        Add Product
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import { useStore } from '@/store'
const INITIAL_STATE = {
  id: '',
  category: '',
  name: '',
  imgUrl: '',
  price: '',
  description: ''
}

export default defineComponent({
  name: 'CreateProduct',
  setup() {
    const store = useStore()
    const toast: any = inject('toast')

    const state = reactive({ ...INITIAL_STATE })
    const resetState = (): void => {
      Object.assign(state, { ...INITIAL_STATE })
    }

    const addProduct = (): void => {
      const unboundData = Object.assign({}, state)
      store.dispatch('createProduct', unboundData)
      resetState()
      toast.success('Product has been created!')
    }
    return { state, addProduct }
  }
})
</script>

<style scoped lang="scss"></style>
