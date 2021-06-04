<template>
  <div
    class="d-flex justify-content-end align-items-center"
    v-if="!urlInputShow"
  >
    <MDBBtn color="light" @click="changeUrlInputShow(true)">
      Add by url
    </MDBBtn>
    <label class="browse btn btn-light my-2">
      Add by upload
      <input
        ref="fileInput"
        class="sr-only"
        type="file"
        accept="image/*"
        @change="addImageByUpload"
      />
    </label>
  </div>
  <div v-if="urlInputShow" class="d-flex flex-column">
    <MDBInput label="Image Url" v-model="urlInput" />
    <div class="d-flex justify-content-end pt-2">
      <MDBBtn color="dark" @click="cancelUrlInput">Cancel</MDBBtn>
      <MDBBtn color="light" @click="addImageByUrl">Add Image</MDBBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { MDBBtn, MDBInput } from 'mdb-vue-ui-kit'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'AddImageBlock',
  components: {
    MDBBtn,
    MDBInput,
  },
  emits: ['addImage'],
  setup(props, { emit }) {
    const urlInputShow = ref(false)
    const changeUrlInputShow = (newValue: boolean): void => {
      urlInputShow.value = newValue
    }

    const urlInput = ref('')

    const cancelUrlInput = (): void => {
      urlInputShow.value = false
      urlInput.value = ''
    }

    const addImageByUpload = (e: Event): void => {
      const target = e.target as HTMLInputElement
      const fileList = target.files
      if (!fileList) return
      emit('addImage', URL.createObjectURL(fileList[0]))
    }
    const addImageByUrl = (): void => {
      if (!urlInput.value) return
      emit('addImage', urlInput.value)
      cancelUrlInput()
    }
    return {
      urlInputShow,
      changeUrlInputShow,
      urlInput,
      cancelUrlInput,
      addImageByUpload,
      addImageByUrl,
    }
  },
})
</script>

<style scoped lang="scss"></style>
