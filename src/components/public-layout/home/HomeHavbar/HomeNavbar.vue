<template>
  <MDBNavbar
    class="d-flex flex-nowrap justify-content-between"
    light
    bg="light"
    position="sticky"
  >
    <HomeNavbarBrand v-if="!showBackButton" />
    <MDBBtn
      v-if="showBackButton"
      size="sm"
      color="light"
      @click="pushRouter('home-main')"
    >
      <MDBIcon icon="chevron-left" iconStyle="fas" />
    </MDBBtn>
    <HomeNavbarSearch
      @click="pushRouter('home-search')"
      :fullSize="fullSizeSearch"
    />
  </MDBNavbar>
</template>

<script lang="ts">
import { MDBBtn, MDBIcon, MDBNavbar } from 'mdb-vue-ui-kit'
import { computed, ComputedRef, defineComponent } from 'vue'

import HomeNavbarBrand from '@/components/public-layout/home/HomeHavbar/HomeNavbarBrand.vue'
import HomeNavbarSearch from '@/components/public-layout/home/HomeHavbar/HomeNavbarSearch.vue'
import router from '@/router'

export default defineComponent({
  name: 'HomeNavbar',
  components: {
    MDBNavbar,
    HomeNavbarBrand,
    HomeNavbarSearch,
    MDBBtn,
    MDBIcon,
  },
  setup() {
    const fullSizeSearch: ComputedRef<boolean> = computed(() => {
      return router.currentRoute.value.name === 'home-search'
    })

    const showBackButton: ComputedRef<boolean> = computed(() => {
      return (
        router.currentRoute.value.name === 'home-search' ||
        router.currentRoute.value.name !== 'home-main'
      )
    })

    const pushRouter = (pathName: string): void => {
      router.push({ name: pathName })
    }
    return { fullSizeSearch, showBackButton, pushRouter }
  },
})
</script>

<style scoped lang="scss">
.navbar {
  height: 55px;
}
</style>
