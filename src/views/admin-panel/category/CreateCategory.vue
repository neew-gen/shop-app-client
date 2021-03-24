<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Please input category name"
        aria-label="name"
        aria-describedby="basic-addon1"
        v-model="data.name"
      />
      <span class="input-group-text" id="basic-addon1">Name</span>
    </div>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Please input category image url"
        aria-label="img"
        aria-describedby="basic-addon2"
        v-model="data.img"
      />
      <span class="input-group-text" id="basic-addon2">Image Url</span>
    </div>

    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="isPublic"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose category visibility
      </button>
      <ul class="dropdown-menu" aria-labelledby="isPublic">
        <li>Hidden</li>
        <li>Public</li>
      </ul>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-success" type="button">
        Add Product
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CreateCategory'
})
</script>

<style scoped lang="scss"></style>
