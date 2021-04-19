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
import {
  ComputedRef,
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
} from 'vue'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBNavbar } from 'mdb-vue-ui-kit'
import BackButton from '@/components/BackButton.vue'
import router from '@/router'
import { RouteRecordName } from 'vue-router'
import { BreadcrumbsData, BreadcrumbsItem } from '@/types/breadcumb'
import BREADCRUMBS_DATA from './data.json'
import { EditListType } from '@/types'

export default defineComponent({
  name: 'AdminBreadcrumb',
  components: {
    BackButton,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBNavbar,
  },
  setup() {
    const state = reactive<BreadcrumbsItem>({
      items: [],
      active: '',
    })

    const routeName: ComputedRef<RouteRecordName> = computed(() => {
      return router.currentRoute.value.name!
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
    if (routeName.value) setBreadcrumbs(routeName.value)

    watch(
      () => routeName.value,
      () => {
        setBreadcrumbs(routeName.value)
      },
    )
    return { state, pushRouter }
  },
})
</script>

<style scoped lang="scss">
.navbar {
  height: 55px;
}
.breadcrumb-item {
  cursor: pointer;
}
.breadcrumb-item.active {
  cursor: default;
}
</style>
