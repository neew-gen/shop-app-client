<template>
  <MDBContainer>
    <HomeNavbar />
    <HomeContent v-if="!fullSizeSearch" />
    <HomeSearchContent v-if="fullSizeSearch" />
    <!--    <MDBContainer fluid>-->
    <!--      <HomeContent v-if="!fullSizeSearch" />-->
    <!--      <HomeSearchContent v-if="fullSizeSearch" />-->
    <!--    </MDBContainer>-->
  </MDBContainer>
</template>

<script lang="ts">
import { MDBContainer } from 'mdb-vue-ui-kit'
import { computed, ComputedRef, defineComponent } from 'vue'

import HomeContent from '@/components/public-layout/home/HomeContent/HomeContent.vue'
import HomeNavbar from '@/components/public-layout/home/HomeHavbar/HomeNavbar.vue'
import HomeSearchContent from '@/components/public-layout/home/HomeSearchContent/HomeSearchContent.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    HomeSearchContent,
    HomeContent,
    HomeNavbar,
    MDBContainer,
  },
  setup() {
    const store = useStore()

    const fullSizeSearch: ComputedRef<boolean> = computed(() => {
      return store.getters.getFullSizeSearch
    })

    return { fullSizeSearch }
  },
})
</script>

<style lang="scss" scoped>
.brand {
  position: absolute;
  left: 0;
  top: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.navbar-brand img {
  border-radius: 3px;
}
.input-group {
  width: 50%;
}
.input-group:hover {
  width: 101% !important;
}
.form-control {
  font-size: 0.8rem;
}
</style>
