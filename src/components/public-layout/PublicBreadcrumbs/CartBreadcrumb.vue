<template>
  <div class="cart-breadcrumb-fake" />
  <MDBNavbar light bg="light" position="top" container>
    <BackButton />
    cart
  </MDBNavbar>
</template>

<script lang="ts">
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBNavbar } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import BackButton from '@/components/BackButton.vue'

export default defineComponent({
  name: 'CartBreadcrumb',
  components: {
    BackButton,
    MDBNavbar,
  },
  setup() {
    // const state = reactive<BreadcrumbsItem>({
    //   items: [],
    //   active: ''
    // })
    //
    // const routeName: ComputedRef<RouteRecordName> = computed(() => {
    //   return router.currentRoute.value.name!
    // })
    //
    // const breadcrumbsData: BreadcrumbsData = BREADCRUMBS_DATA
    // const pushRouter = (path: string): void => {
    //   router.push({ name: path })
    // }
    //
    // const setBreadcrumbs = (name: RouteRecordName): void => {
    //   const nameToStr = name.toString()
    //   const currentBreadcrumb = breadcrumbsData[nameToStr]
    //   if (currentBreadcrumb) {
    //     state.items = breadcrumbsData[nameToStr].items
    //     state.active = breadcrumbsData[nameToStr].active
    //   }
    // }
    // if (routeName.value) setBreadcrumbs(routeName.value)
    //
    // watch(
    //   () => routeName.value,
    //   () => {
    //     setBreadcrumbs(routeName.value)
    //   }
    // )
    // return { state, pushRouter }
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
.cart-breadcrumb-fake {
  padding-bottom: 55px;
}
</style>
