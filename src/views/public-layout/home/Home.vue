<template>
  <div>
    <HomeNavbar />
    <MDBContainer fluid>
      <HomeContent />
      <!--      <HomeSearchContent v-else />-->
    </MDBContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onUnmounted, ref } from 'vue'
import { MDBContainer } from 'mdb-vue-ui-kit'
import HomeNavbar from '@/components/public-layout/home/HomeHavbar/HomeNavbar.vue'
import { eventBus } from '@/helpers/EventBus'
import HomeContent from '@/components/public-layout/home/HomeContent/HomeContent.vue'
import HomeSearchContent from '@/components/public-layout/home/HomeSearchContent/HomeSearchContent.vue'
// import Carousel from '@/components/Carousel.vue'
// import HomeList from '@/components/HomeList/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    // HomeSearchContent,
    HomeContent,
    HomeNavbar,
    MDBContainer
  },
  // components: { HomeList, Carousel }
  setup() {
    const eventBus: any = inject('eventBus')
    const fullSizeSearch = ref(false)
    const loading = inject('loading')

    eventBus.subscribe('updateSearchSize', (newValue: any) => {
      fullSizeSearch.value = newValue
    })
    onUnmounted(() => {
      eventBus.unsubscribe('updateSearchSize')
    })
    return { fullSizeSearch, loading }
  }
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
