<template>
  <div>
    <div v-for="item in files" :key="item.id">
      <div class="img-container">
        <img :src="item.imgUrl" alt="" />
      </div>
      <div class="d-flex justify-content-between p-2 border-bottom">
        <MDBBtn color="light" @click="startEdit(item.imgUrl, item.id)">
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
          @change="pushFile"
        />
      </label>
    </div>
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
// TODO need to do refactoring
// TODO need to add dropdowns for change file positions
import {
  MDBBtn,
  // MDBDropdown,
  // MDBDropdownItem,
  // MDBDropdownMenu,
  // MDBDropdownToggle,
} from 'mdb-vue-ui-kit'
import { defineComponent, PropType, reactive, ref, watch } from 'vue'
import { Cropper } from 'vue-advanced-cropper'

import BottomModal from '@/components/BottomModal.vue'

export default defineComponent({
  name: 'ImageUploader',
  components: {
    // ImageContainer,
    Cropper,
    BottomModal,
    MDBBtn,
    // MDBDropdown,
    // MDBDropdownItem,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
  },
  props: {
    images: {
      type: Object as PropType<{ imgUrl: string; id: number }[]>,
    },
  },
  emits: ['modal', 'files'],
  setup(props, { emit }) {
    const files = ref<{ imgUrl: string; id: number }[]>([])

    const id = ref(0)
    const editingImage = reactive({
      imgUrl: '',
      id: 0,
    })
    const modalMode = ref(false)
    const cropper = ref()
    const fileInput = ref()

    const changeModalMode = (newValue: boolean): void => {
      modalMode.value = newValue
      emit('modal', newValue)
    }

    const startEdit = (imgUrl: string, id: number): void => {
      editingImage.imgUrl = imgUrl
      editingImage.id = id
      // console.log()
      changeModalMode(true)
    }

    const pushFile = (e: any): void => {
      const fileList = e.target.files || e.dataTransfer.files
      if (!fileList.length) return
      files.value.push({
        imgUrl: URL.createObjectURL(fileList[0]),
        id: id.value,
      })
      // the way to clear the fileInput. The method from linus borg
      fileInput.value.type = 'text'
      fileInput.value.type = 'file'
      id.value += 1
      sendFilesToParent()
    }

    // const fileToURL = (file: any): any => {
    //   return URL.createObjectURL(file)
    // }
    const endEdit = (): void => {
      const { canvas } = cropper.value.getResult()
      const editedImage = canvas.toDataURL()
      const croppingItem = files.value.filter(
        (f) => f.id === editingImage.id,
      )[0]
      croppingItem.imgUrl = editedImage
      changeModalMode(false)
      sendFilesToParent()
    }

    const deleteImage = (id: number): void => {
      files.value = files.value.filter((f) => f.id !== id)
      sendFilesToParent()
    }

    function sendFilesToParent(): void {
      emit('files', files)
    }

    return {
      modalMode,
      changeModalMode,
      files,
      pushFile,
      // fileToURL,
      startEdit,
      editingImage,
      endEdit,
      cropper,
      deleteImage,
      fileInput,
    }
  },
})
</script>

<style scoped lang="scss">
.img-container {
  width: 100%;
  height: 300px;
  //height: 150px;
  //width: 200px;
  background: #4f4f4f;
  > img {
    //height: 100%;
    //width: auto;
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
//.cropper-stencil {
//  &__preview {
//    &:after,
//    &:before {
//      content: '';
//      opacity: 0;
//      transition: opacity 0.25s;
//      position: absolute;
//      pointer-events: none;
//      z-index: 1;
//    }
//
//    &:after {
//      border-left: solid 1px white;
//      border-right: solid 1px white;
//      width: 33%;
//      height: 100%;
//      transform: translateX(-50%);
//      left: 50%;
//      top: 0;
//    }
//
//    &:before {
//      border-top: solid 1px white;
//      border-bottom: solid 1px white;
//      height: 33%;
//      width: 100%;
//      transform: translateY(-50%);
//      top: 50%;
//      left: 0;
//    }
//  }
//
//  &--dragging {
//    .cropper-stencil__preview {
//      &:after,
//      &:before {
//        opacity: 0.7;
//      }
//    }
//  }
//}
//
//.cropper-line {
//  border-color: rgba(white, 0.8);
//}
//
//.cropper-handler-wrapper {
//  width: 24px;
//  height: 24px;
//  &--west-north {
//    transform: translate(0, 0);
//  }
//  &--east-south {
//    transform: translate(-100%, -100%);
//  }
//  &--west-south {
//    transform: translate(0, -100%);
//  }
//  &--east-north {
//    transform: translate(-100%, 0);
//  }
//}
//
//.cropper-handler {
//  display: block;
//  position: relative;
//  flex-shrink: 0;
//  transition: opacity 0.5s;
//  border: none;
//  background: white;
//  height: 4px;
//  width: 4px;
//  opacity: 0;
//  top: auto;
//  left: auto;
//
//  &--west-north,
//  &--east-south,
//  &--west-south,
//  &--east-north {
//    display: block;
//    height: 16px;
//    width: 16px;
//    background: none;
//    opacity: 0.7;
//  }
//
//  &--west-north {
//    border-left: solid 2px white;
//    border-top: solid 2px white;
//  }
//
//  &--east-south {
//    border-right: solid 2px white;
//    border-bottom: solid 2px white;
//  }
//
//  &--west-south {
//    border-left: solid 2px white;
//    border-bottom: solid 2px white;
//  }
//
//  &--east-north {
//    border-right: solid 2px white;
//    border-top: solid 2px white;
//  }
//
//  &--hover {
//    opacity: 1;
//  }
//}
</style>
