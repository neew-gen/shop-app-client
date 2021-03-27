<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Please enter a name"
        aria-label="name"
        aria-describedby="basic-addon1"
        v-model="state.name"
      />
      <span class="input-group-text" id="basic-addon1">Name</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Please enter a image url"
        aria-label="img"
        aria-describedby="basic-addon2"
        v-model="state.imgUrl"
      />
      <span class="input-group-text" id="basic-addon2">Image Url</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="btn-group">
        <button
          class="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category visibility:
          {{ state.isPublic === true ? 'Public' : 'Hidden' }}
        </button>
        <ul class="dropdown-menu">
          <li class="dropdown-item" @click="changeIsPublic(false)">Hidden</li>
          <li class="dropdown-item" @click="changeIsPublic(true)">Public</li>
        </ul>
      </div>

      <button class="btn btn-success" type="button" @click="addCategory()">
        Add Category
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import { useStore } from '@/store'
const INITIAL_STATE = {
  id: '',
  name: '',
  imgUrl: '',
  isPublic: false
}

export default defineComponent({
  name: 'CreateCategory',
  setup() {
    const store = useStore()
    const toast: any = inject('toast')

    const state = reactive({ ...INITIAL_STATE })
    const resetState = (): void => {
      Object.assign(state, { ...INITIAL_STATE })
    }

    const changeIsPublic = (newValue: boolean): void => {
      state.isPublic = newValue
    }

    const addCategory = (): void => {
      const unboundData = Object.assign({}, state)
      store.dispatch('createCategory', unboundData)
      resetState()
      toast.success('Category has been created!')
    }
    return { state, changeIsPublic, addCategory }
  }
})
</script>

<style scoped lang="scss"></style>
