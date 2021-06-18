<template>
  <MDBListGroupItem>
    <div class="d-flex justify-content-between align-items-center">
      <div class="image-wrapper">
        <img :src="data.imgUrl" alt="loaded-image" />
      </div>
      <div>
        <MDBBtn color="dark" @click="deleteImage">Delete</MDBBtn>
      </div>
    </div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBBtn, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'
import { useToast } from 'vue-toastification'

import { deleteProductImages } from '@/services/Firebase/ImageStorageService'
import { useStore } from '@/store'
import { ProductImagesItem } from '@/types/product'

export default defineComponent({
  name: 'CreateProductLoadedImagesListItem',
  components: {
    MDBListGroupItem,
    MDBBtn,
  },
  props: {
    data: {
      type: Object as PropType<ProductImagesItem>,
      required: true,
    },
  },
  setup(props) {
    const toast = useToast()
    const store = useStore()
    const deleteImage = (): void => {
      deleteProductImages([props.data.id]).then(() => {
        store.dispatch('deleteCreateProductImage', props.data.id)
        toast.success('Succesful delete!')
      })
    }
    return { deleteImage }
  },
})
</script>

<style scoped lang="scss">
.image-wrapper {
  height: 50px;
  width: 70px;
  > img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}
</style>
