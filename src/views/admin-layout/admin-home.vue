<template>
  <fieldset class="custom-fieldset">
    <legend>Products Management</legend>
    <MDBListGroup horizontal>
      <router-link
        class="list-group-item flex-fill"
        :to="{ name: 'create-product' }"
        >Add product
      </router-link>
      <router-link
        class="list-group-item flex-fill"
        :to="{ name: 'edit-products' }"
        >Edit products
      </router-link>
    </MDBListGroup>
  </fieldset>
  <fieldset class="custom-fieldset">
    <legend>Categories Management</legend>
    <MDBListGroup horizontal>
      <router-link
        class="list-group-item flex-fill"
        :to="{ name: 'create-category' }"
        >Add category
      </router-link>
      <router-link
        class="list-group-item flex-fill"
        :to="{ name: 'edit-categories' }"
        >Edit categories
      </router-link>
    </MDBListGroup>
  </fieldset>
  <fieldset class="custom-fieldset">
    <legend>Swipes Management</legend>
    <MDBListGroup horizontal>
      <router-link
        class="list-group-item flex-fill"
        :to="{ name: 'create-swipe' }"
        >Add swipe
      </router-link>
      <router-link
        class="list-group-item flex-fill"
        :to="{ name: 'edit-swipes' }"
        >Edit swipes
      </router-link>
    </MDBListGroup>
  </fieldset>
</template>

<script lang="ts">
import { MDBContainer, MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'admin-home',
  components: {
    MDBListGroup,
  },
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
