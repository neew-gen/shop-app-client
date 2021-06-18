<template>
  <div>
    <div v-if="editingImage" class="img-container">
      <img :src="editingImage" alt="uploaded-image" />
    </div>
    <div class="d-flex justify-content-between pt-2" v-if="editingImage">
      <MDBBtn color="dark" @click="cancel">Cancel</MDBBtn>
      <MDBBtn color="primary" @click="changeModalMode(true)">Crop</MDBBtn>
      <MDBBtn color="light" @click="saveToFirebase">Save</MDBBtn>
    </div>
    <AddImageBlock v-if="!editingImage" @addImage="addImage" />
  </div>

  <BottomModal :show="modalMode" :changeModal="changeModalMode">
    <template v-slot:modal-header>
      <div>Edit image</div>
      <MDBBtn size="sm" color="dark" @click="changeModalMode(false)">
        Close
      </MDBBtn>
    </template>
    <template v-slot:modal-body>
      <cropper
        class="cropper"
        :src="editingImage"
        :auto-zoom="true"
        ref="cropper"
      />
    </template>
    <template v-slot:modal-footer>
      <MDBBtn class="m-1" color="dark" @click="endEdit">Save</MDBBtn>
    </template>
  </BottomModal>
</template>

<script lang="ts">
import { MDBBtn } from 'mdb-vue-ui-kit'
import { defineComponent, Ref, ref } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import { useToast } from 'vue-toastification'

import AddImageBlock from '@/components/admin-layout/product/create-product/CreateProductImagesInput/AddImageBlock.vue'
import BottomModal from '@/components/BottomModal.vue'
import { uploadProductImage } from '@/services/Firebase/ImageStorageService'
import { useStore } from '@/store'

export default defineComponent({
  name: 'UploadingImage',
  components: { AddImageBlock, MDBBtn, Cropper, BottomModal },
  emits: ['modal'],
  setup(props, { emit }) {
    const toast = useToast()
    const store = useStore()
    const cropper = ref()

    const modalMode = ref(false)
    const changeModalMode = (newValue: boolean): void => {
      modalMode.value = newValue
      emit('modal', newValue)
    }

    const editingImage: Ref<string | null> = ref(null)
    const addImage = (e: string): void => {
      editingImage.value = e
    }
    const cancel = (): void => {
      editingImage.value = null
    }
    const endEdit = (): void => {
      const { canvas } = cropper.value.getResult()
      canvas.toBlob(
        function (blob: Blob) {
          editingImage.value = URL.createObjectURL(blob)
        },
        'image/jpeg',
        100,
      )
      changeModalMode(false)
    }
    const saveToFirebase = (): void => {
      if (!editingImage.value) return
      uploadProductImage(editingImage.value).then((res) => {
        store.dispatch('addCreateProductImage', res)
        editingImage.value = null
        toast.success('Succesful upload!')
      })
    }
    return {
      cropper,
      modalMode,
      changeModalMode,
      editingImage,
      addImage,
      cancel,
      endEdit,
      saveToFirebase,
    }
  },
})
</script>

<style scoped lang="scss">
//.show-images-btn {
//  width: 176px;
//}
.img-container {
  width: 100%;
  height: 300px;
  background: #4f4f4f;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
