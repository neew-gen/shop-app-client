<template>
  <LoginPanel />
  <MDBCol col="12">likes</MDBCol>
  <MDBCol col="12">history</MDBCol>
  <MDBCol col="12">
    <router-link to="/admin-panel">Link to admin-panel</router-link>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCol, MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import LoginPanel from '@/components/public-layout/profile/LoginPanel/LoginPanel.vue'

export default defineComponent({
  name: 'profile',
  components: {
    LoginPanel,
    MDBCol,
  },
  setup() {
    // const isLogged = ref(false)
    //
    // const extractor = (data: any): any => {
    //   return data.data
    // }
    // const { data, loading } = useFetch(
    //   'SWR',
    //   '/profile',
    //   () => getUser(),
    //   () => extractor,
    // )
    //
    // isLogged.value = isLoggedIn()
    //
    // return { isLogged, data, loading }
  },
})
</script>

<style scoped lang="scss"></style>
