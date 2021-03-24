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
    <div class="d-flex justify-content-between">
      <button class="btn btn-danger" type="button" @click="removeProduct()">
        Delete product
      </button>
      <button class="btn btn-warning" type="button" @click="updateProduct()">
        Edit product
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject } from 'vue'
import { ProductApi } from '@/api/product.api'
import { assignFieldsForReactive } from '@/helpers'
import router from '@/router'

export default defineComponent({
  name: 'EditProduct',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    const toast: any = inject('toast')
    const data = reactive({
      category: '',
      name: '',
      img: '',
      price: '',
      description: ''
    })
    const fetchedData = await ProductApi.fetchProductById(props.id)
    assignFieldsForReactive(data, fetchedData)

    const updateProduct = (): void => {
      ProductApi.updateProduct(props.id, data)
      toast.success('Product has been updated!')
    }
    const removeProduct = (): void => {
      ProductApi.removeProduct(props.id)
      toast.error('Product has been deleted!')
      // does not allow us to return to the deleted product page
      router.replace({ path: '/admin-panel/edit-products' })
    }
    return {
      data,
      updateProduct,
      removeProduct
    }
  }
})
</script>

<style scoped lang="scss"></style>
