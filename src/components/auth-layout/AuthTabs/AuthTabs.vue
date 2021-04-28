<template>
  <MDBContainer>
    <MDBRow>
      <MDBCol class="border-right" col="6">
        <router-link
          class="router-link flex-fill"
          :to="{ name: 'registration' }"
          >Registration
        </router-link>
      </MDBCol>
      <MDBCol col="6">
        <router-link class="router-link flex-fill" :to="{ name: 'login' }">
          Login
        </router-link>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBCol, MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthTabs',
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
  },
})
</script>

<style scoped lang="scss">
.router-link {
  color: #4f4f4f;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}
.router-link-active {
  color: #1266f1;
  border-bottom: #1266f1 0.5px solid;
  //color: inherit;
}
.border-right {
  border-right: 0.5px solid rgba(0, 0, 0, 0.125);
}
</style>
