<template>
  <MDBCol col="12" class="d-flex justify-content-between mb-2">
    <MDBBtn color="dark" @click="clearFields"> Clear </MDBBtn>
    <MDBBtn color="light" @click="addProduct"> Add Product </MDBBtn>
  </MDBCol>
</template>

<script lang="ts">
import { MDBBtn, MDBCol } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import { deleteProductImages } from '@/services/Firebase/ImageStorageService'
import { graphqlCreate } from '@/services/GraphqlService/GraphqlService'
import { CREATE_PRODUCT } from '@/services/GraphqlService/queries/productQueries'
import { useStore } from '@/store'
import { CreateProductGraphqlVariable } from '@/types/product'

export default defineComponent({
  name: 'CreateProductAddBlock',
  components: {
    MDBBtn,
    MDBCol,
  },
  setup() {
    const store = useStore()

    const addProduct = (): void => {
      const productInput = store.getters.getCreateProductInput
      graphqlCreate<CreateProductGraphqlVariable>(CREATE_PRODUCT, {
        createProduct: productInput,
      }).then(() => {
        store.dispatch('clearCreateProduct', undefined)
      })
    }

    const clearFields = (): void => {
      const productImages = store.getters.getCreateProductImages
      const imageIdsForDelete = productImages.map((imageItem) => imageItem.id)
      deleteProductImages(imageIdsForDelete).then(() => {
        store.dispatch('clearCreateProduct', undefined)
      })
    }
    return {
      addProduct,
      clearFields,
    }
  },
})
</script>

<style scoped lang="scss"></style>
