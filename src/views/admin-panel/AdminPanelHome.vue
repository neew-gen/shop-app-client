<template>
  <div class="container-fluid">
    <ul class="list-group">
      <li class="list-group-item">
        <router-link :to="{ name: 'CreateProduct' }">Add product</router-link>
      </li>
      <li class="list-group-item">
        <router-link :to="{ name: 'EditProductsList' }"
          >Edit products</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link :to="{ name: 'CreateCategory' }">Add category</router-link>
      </li>
      <li class="list-group-item">
        <router-link :to="{ name: 'EditCategoriesList' }"
          >Edit categories</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdminPanelHome'
})
</script>

<style scoped lang="scss"></style>
