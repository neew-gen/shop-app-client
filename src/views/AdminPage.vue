<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div>
        Панель управления
      </div>
      <div>
        Добавить товар
      </div>
    </div>
  </nav>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="id"
        aria-label="id"
        aria-describedby="basic-addon0"
        v-model="data.id"
      />
      <span class="input-group-text" id="basic-addon0">id</span>
    </div>

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
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="addProduct()"
    >
      Добавить товар
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import ProductModel from '@/models/catalog.model'
import { ProductApi } from '@/api/product.api'
// import { store } from '@/store'

export default defineComponent({
  name: 'AdminPage',
  setup() {
    const data = reactive({
      category: '',
      name: '',
      img: '',
      price: undefined,
      description: ''
    })
    const addProduct = async (): Promise<void> => {
      await ProductApi.createProduct(data)
      // await ProductModel.insert({ data: data })
      // console.log(await ProductModel.insert({ data: data }))
      // console.log(ProductModel.all())
      // const product = ProductModel.query().last()
      // await ProductModel.insert({
      //   data: [data]
      // })
      // const product = await ProductModel.query().last()
      // console.log(product)
      // if (product !== null) {
      //   await product.$dispatch('persist', { id: product.$id })
      // }
    }
    return { data, addProduct }
  }
})
</script>

<style scoped lang="scss"></style>
