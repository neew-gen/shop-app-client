<template>
  <div class="d-flex justify-content-end align-items-center" v-if="true">
    <!--    <MDBBtn color="light" @click="addByUrlClick"> Add by url </MDBBtn>-->
    <label class="browse btn btn-light my-2">
      Upload image
      <input
        ref="fileInput"
        class="sr-only"
        type="file"
        accept="image/*"
        @change="addImageByUpload"
      />
    </label>
  </div>
  <!--  <div v-if="urlInputShow" class="d-flex flex-column">-->
  <!--    <MDBInput id="urlInputRef" label="Image Url" v-model="urlInput" />-->
  <!--    <div class="d-flex justify-content-end pt-2">-->
  <!--      <MDBBtn color="dark" @click="cancelUrlInput">Cancel</MDBBtn>-->
  <!--      <MDBBtn color="light" @click="addImageByUrl">Add Image</MDBBtn>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
// import { MDBBtn, MDBInput } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AddImageBlock',
  components: {
    // MDBBtn,
    // MDBInput,
  },
  emits: ['addImage'],
  setup(props, { emit }) {
    // const urlInputShow = ref(false)
    // const changeUrlInputShow = (newValue: boolean): void => {
    //   urlInputShow.value = newValue
    // }
    //
    // const urlInput = ref('')

    // const cancelUrlInput = (): void => {
    //   urlInputShow.value = false
    //   urlInput.value = ''
    // }

    const addImageByUpload = (e: Event): void => {
      const target = e.target as HTMLInputElement
      const fileList = target.files
      if (!fileList) return
      emit('addImage', URL.createObjectURL(fileList[0]))
    }
    // const addByUrlClick = (): void => {
    //   changeUrlInputShow(true)
    //   setTimeout(() => {
    //     const urlInputRef = document.getElementById('urlInputRef')
    //     if (!urlInputRef) return
    //     urlInputRef.focus()
    //   }, 0)
    // }
    // TODO cors is shit!
    // const addImageByUrl = (): void => {
    //   if (!urlInput.value) return
    //   const img = new Image()
    //   img.crossOrigin = 'anonymous'
    //   img.src = urlInput.value
    //   img.onload = function (): void {
    //     const canvas = document.createElement('canvas')
    //     const context = canvas.getContext('2d')
    //     if (!context) return
    //     context.drawImage(img, 0, 0)
    //     // canvas.height = img.height
    //     // canvas.width = img.width
    //     canvas.toBlob(
    //       function (blob) {
    //         emit('addImage', URL.createObjectURL(blob))
    //         cancelUrlInput()
    //       },
    //       'image/jpeg',
    //       100,
    //     )
    //   }
    // }
    return {
      // urlInputShow,
      // changeUrlInputShow,
      // urlInput,
      // cancelUrlInput,
      addImageByUpload,
      // addByUrlClick,
      // addImageByUrl,
    }
  },
})
</script>

<style scoped lang="scss"></style>
