<template>
  <MDBNavbar light bg="light" container>
    <BackButton />
    <MDBBreadcrumb>
      <MDBBreadcrumbItem
        v-for="(item, index) in state.items"
        :key="index"
        :active="item.path === state.active"
        @click="pushRouter(item.path)"
      >
        {{ item.name }}
      </MDBBreadcrumbItem>
    </MDBBreadcrumb>
  </MDBNavbar>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBNavbar } from 'mdb-vue-ui-kit'
import BackButton from '@/components/Breadcrumb/BackButton.vue'
import router from '@/router'
import { RouteRecordName } from 'vue-router'
import { BreadcrumbsItem, BreadcrumbsData } from '@/types/breadcumb'
import BREADCRUMBS_DATA from './data.json'

export default defineComponent({
  name: 'Breadcrumb',
  components: {
    BackButton,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBNavbar
  },
  setup() {
    const state = reactive<BreadcrumbsItem>({
      items: [],
      active: ''
    })
    const breadcrumbsData: BreadcrumbsData = BREADCRUMBS_DATA
    const pushRouter = (path: string): void => {
      router.push({ name: path })
    }

    const setBreadcrumbs = (name: RouteRecordName): void => {
      const nameToStr = name.toString()
      const currentBreadcrumb = breadcrumbsData[nameToStr]
      if (currentBreadcrumb) {
        state.items = breadcrumbsData[nameToStr].items
        state.active = breadcrumbsData[nameToStr].active
      }
    }
    if (router.currentRoute.value.name)
      setBreadcrumbs(router.currentRoute.value.name)

    watch(
      () => router.currentRoute.value.name,
      () => {
        if (router.currentRoute.value.name)
          setBreadcrumbs(router.currentRoute.value.name)
      }
    )
    return { state, pushRouter }
  }
})
</script>

<style scoped lang="scss">
.navbar {
  height: 54px;
}
.breadcrumb-item {
  cursor: pointer;
}
.breadcrumb-item.active {
  cursor: default;
}
</style>
