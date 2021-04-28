<template>
  <MDBContainer>
    <MDBRow>
      <LoginPanel />
    </MDBRow>
    <MDBRow>
      <MDBCol col="12">likes</MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol col="12">history</MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBCol, MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
import LoginPanel from '@/components/public-layout/profile/LoginPanel/LoginPanel.vue'

export default defineComponent({
  name: 'profile',
  components: {
    LoginPanel,
    MDBContainer,
    MDBRow,
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
