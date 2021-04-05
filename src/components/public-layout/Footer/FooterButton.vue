<template>
  <router-link class="router-link flex-fill" :to="path" exact>
    <MDBIcon :icon="icon" iconStyle="fas" size="lg" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { MDBIcon } from 'mdb-vue-ui-kit'
import router from '@/router'
import { RouteRecordName } from 'vue-router'

export default defineComponent({
  name: 'FooterButton',
  props: {
    icon: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  components: {
    MDBIcon
  },
  setup(props) {
    // const activeClass = ref('')
    // const setActive = (name: string): void => {
    //   if (name === props.path) {
    //     activeClass.value = 'active-custom-link'
    //   } else {
    //     activeClass.value = ''
    //   }
    //   console.log(activeClass.value)
    // }
    //
    // watch(
    //   () => router.currentRoute.value.path,
    //   () => {
    //     if (router.currentRoute.value.path)
    //       setActive(router.currentRoute.value.path)
    //   }
    // )
    // return {
    //   activeClass
    // }
  }
})
</script>

<style scoped lang="scss">
.router-link {
  color: #4f4f4f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-link-active {
  color: inherit;
}
.router-link-exact-active {
  color: #1266f1;
}
</style>
