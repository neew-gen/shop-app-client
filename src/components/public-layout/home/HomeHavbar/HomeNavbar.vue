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
import { MDBBtn, MDBIcon, MDBNavbar } from 'mdb-vue-ui-kit'
import { computed, ComputedRef, defineComponent } from 'vue'

import HomeNavbarBrand from '@/components/public-layout/home/HomeHavbar/HomeNavbarBrand.vue'
import HomeNavbarSearch from '@/components/public-layout/home/HomeHavbar/HomeNavbarSearch.vue'
import { useStore } from '@/store'

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
    const store = useStore()

    const fullSizeSearch: ComputedRef<boolean> = computed(() => {
      return store.getters.getFullSizeSearch
    })

    const setSizeSearch = (newValue: boolean): void => {
      store.dispatch('updateFullSizeSearch', newValue)
    }
    return { fullSizeSearch, setSizeSearch }
  },
})
</script>

<style scoped lang="scss">
.navbar {
  height: 55px;
}
</style>
