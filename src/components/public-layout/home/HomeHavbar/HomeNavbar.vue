<template>
  <MDBNavbar class="flex-nowrap" light bg="light" position="sticky" container>
    <HomeNavbarBrand v-if="!fullSizeSearch" />
    <MDBBtn v-else size="sm" color="light" @click="setSizeSearch(false)">
      <MDBIcon icon="chevron-left" iconStyle="fas" />
    </MDBBtn>
    <HomeNavbarSearch @click="setSizeSearch(true)" :fullSize="fullSizeSearch" />
  </MDBNavbar>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { MDBNavbar, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit'
import HomeNavbarBrand from '@/components/public-layout/home/HomeHavbar/HomeNavbarBrand.vue'
import HomeNavbarSearch from '@/components/public-layout/home/HomeHavbar/HomeNavbarSearch.vue'

export default defineComponent({
  name: 'HomeNavbar',
  components: {
    MDBNavbar,
    HomeNavbarBrand,
    HomeNavbarSearch,
    MDBBtn,
    MDBIcon
  },
  setup() {
    const eventBus: any = inject('eventBus')
    const fullSizeSearch = ref(false)

    const setSizeSearch = (newValue: boolean): void => {
      fullSizeSearch.value = newValue
      eventBus.publish('updateSearchSize', newValue)
    }
    return { fullSizeSearch, setSizeSearch }
  }
})
</script>

<style scoped lang="scss">
.navbar {
  height: 55px;
}
</style>
