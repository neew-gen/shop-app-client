<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="category"
        aria-label="category"
        aria-describedby="basic-addon1"
        v-model="data.category"
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
        v-model="data.name"
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
        v-model="data.img"
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
        v-model="data.price"
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
        v-model="data.description"
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
import { defineComponent, reactive } from 'vue'
import { ProductApi } from '@/api/product.api'

export default defineComponent({
  name: 'CreateProduct',
  setup() {
    const data = reactive({
      id: '',
      category: '',
      name: '',
      img: '',
      price: '',
      description: ''
    })

    const addProduct = (): void => {
      const dataFromProxy = Object.assign({}, data)
      console.log(dataFromProxy)
      ProductApi.createProduct(dataFromProxy)
    }
    return { data, addProduct }
  }
})
</script>

<style scoped lang="scss"></style>
