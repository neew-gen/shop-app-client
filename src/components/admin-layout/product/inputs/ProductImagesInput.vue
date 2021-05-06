<template>
  <MDBCol col="12">
    <div class="d-flex justify-content-between py-1">
      <div>Images: {{ productImages.length }}</div>
      <div
        class="show-images-btn btn btn-default btn-sm"
        :class="showImagesMode ? 'btn-dark' : 'btn-default'"
        @click="changeShowImagesMode(!showImagesMode)"
      >
        {{ showImagesMode ? 'Hide' : 'Show' }}&nbsp;the Images Menu
      </div>
    </div>
    <div v-if="showImagesMode">
      <div v-for="item in productImages" :key="item.id">
        <div class="img-container">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="d-flex justify-content-between p-2 border-bottom">
          <MDBBtn color="light" @click="startEdit(item.id, item.imgUrl)">
            Crop
          </MDBBtn>
          <div>
            <MDBBtn color="dark" @click="deleteImage(item.id)">Delete</MDBBtn>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-end align-items-center">
        <label class="browse btn btn-light my-2">
          Add image...
          <input
            ref="fileInput"
            class="sr-only"
            type="file"
            accept="image/*"
            @change="addImage"
          />
        </label>
      </div>
    </div>
  </MDBCol>

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
        :src="editingImage.imgUrl"
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
import { MDBBtn, MDBCol } from 'mdb-vue-ui-kit'
import { computed, ComputedRef, defineComponent, reactive, ref } from 'vue'
import { Cropper } from 'vue-advanced-cropper'

import BottomModal from '@/components/BottomModal.vue'
import { useStore } from '@/store'
import { ProductImagesItem } from '@/types/product'

export default defineComponent({
  name: 'ProductImagesInput',
  components: {
    Cropper,
    BottomModal,
    MDBBtn,
    MDBCol,
  },
  props: {
    error: {
      type: String,
    },
  },
  emits: ['modal'],
  setup(props, { emit }) {
    const store = useStore()
    const cropper = ref()
    const fileInput = ref()

    const showImagesMode = ref(false)
    const changeShowImagesMode = (newValue: boolean): void => {
      showImagesMode.value = newValue
    }

    const productImages: ComputedRef<ProductImagesItem[]> = computed(() => {
      return store.getters.getProductImages
    })

    const modalMode = ref(false)
    const changeModalMode = (newValue: boolean): void => {
      modalMode.value = newValue
      emit('modal', newValue)
    }

    const editingImage = reactive({
      id: '',
      imgUrl: '',
    })
    const startEdit = (id: string, imgUrl: string): void => {
      editingImage.id = id
      editingImage.imgUrl = imgUrl
      changeModalMode(true)
    }
    const endEdit = (): void => {
      const { canvas } = cropper.value.getResult()
      canvas.toBlob(function (blob: Blob) {
        store.dispatch('updateProductImage', {
          id: editingImage.id,
          imgUrl: URL.createObjectURL(blob)
        })
      })
      changeModalMode(false)
    }

    const addImage = (e: Event): void => {
      const target = e.target as HTMLInputElement
      const fileList = target.files
      if (!fileList) return
      store.dispatch('addProductImage', URL.createObjectURL(fileList[0]))
      // the way to clear the fileInput. The method from linus borg
      fileInput.value.type = 'text'
      fileInput.value.type = 'file'
    }
    const deleteImage = (id: string): void => {
      store.dispatch('deleteProductImage', id)
    }

    return {
      cropper,
      fileInput,
      showImagesMode,
      changeShowImagesMode,
      productImages,
      modalMode,
      changeModalMode,
      editingImage,
      startEdit,
      endEdit,
      addImage,
      deleteImage,
    }
  },
})
</script>

<style scoped lang="scss">
.show-images-btn {
  width: 176px;
}
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
.cropper {
  width: 100%;
  height: 50vh;
  background: #ddd;
}
</style>
