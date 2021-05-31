<template>
  <MDBCol col="12">
    <div class="profile-login">
      <div class="not-logged" v-if="!isLogged">
        <div>You are not logged.&nbsp;</div>
        <router-link to="/auth"> Please login.</router-link>
      </div>
      <div class="logged" v-if="isLogged">
        <div>User:&nbsp;{{ name }}.</div>
        <MDBBtn color="dark" @click="logoutEmit"> Logout </MDBBtn>
      </div>
    </div>
  </MDBCol>
</template>

<script lang="ts">
import { isLoggedIn } from 'axios-jwt'
import { MDBBtn, MDBCol } from 'mdb-vue-ui-kit'
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import { useToast } from 'vue-toastification'

import { logout } from '@/services/JwtService/requests'
import { useStore } from '@/store'

export default defineComponent({
  name: 'LoginPanel',
  // emits: ['logout'],
  components: {
    MDBCol,
    MDBBtn,
  },
  setup() {
    const toast = useToast()
    const store = useStore()
    const isLogged = ref(false)

    isLogged.value = isLoggedIn()

    if (isLogged.value) {
      store.dispatch('fetchUserData', undefined)
    }
    const name: ComputedRef<string> = computed(() => {
      return store.getters.getUserName
    })

    const logoutEmit = async (): Promise<void> => {
      await logout()
      // emit('logout', false)
      isLogged.value = false
      toast.success('You logged out!')
    }

    return { isLogged, logoutEmit, name }
  },
})
</script>

<style scoped lang="scss">
.profile-login {
  height: 60px;
  margin: 5px 0;
  padding: 0 15px;
  border: 0.5px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  display: flex;
  justify-content: center;
}
.not-logged {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logged {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
