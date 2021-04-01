<template>
  <MDBContainer fluid>
    <fieldset class="custom-fieldset">
      <legend>Products Management</legend>
      <MDBListGroup horizontal>
        <router-link
          class="list-group-item flex-fill"
          :to="{ name: 'CreateProduct' }"
          >Add product</router-link
        >
        <router-link
          class="list-group-item flex-fill"
          :to="{ name: 'EditProductsList' }"
          >Edit products</router-link
        >
      </MDBListGroup>
    </fieldset>
    <fieldset class="custom-fieldset">
      <legend>Categories Management</legend>
      <MDBListGroup horizontal>
        <router-link
          class="list-group-item flex-fill"
          :to="{ name: 'CreateCategory' }"
          >Add category</router-link
        >
        <router-link
          class="list-group-item flex-fill"
          :to="{ name: 'EditCategoriesList' }"
          >Edit categories</router-link
        >
      </MDBListGroup>
    </fieldset>
  </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBContainer, MDBListGroup } from 'mdb-vue-ui-kit'

export default defineComponent({
  name: 'AdminPanelHome',
  components: {
    MDBContainer,
    MDBListGroup
  }
})
</script>

<style scoped lang="scss">
.custom-fieldset {
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 1rem 0.5rem 0.5rem;
  margin-top: 2em;
  position: relative;
}
.custom-fieldset legend {
  font-size: 1.2rem;
  border: 0;
  background: #fff;
  width: auto;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 1em;
  padding: 0 0.5em;
}
</style>
