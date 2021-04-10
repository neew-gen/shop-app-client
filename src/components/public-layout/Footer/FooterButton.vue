<template>
  <!--    we check the path. If the path is "/" we set it to "exact".
  We also replace "active-class" with custom class if the path is not "/"-->
  <router-link
    class="router-link flex-fill"
    :to="path"
    :exact="path === '/'"
    :active-class="activeClass(path)"
  >
    <MDBIcon :icon="icon" iconStyle="fas" size="lg" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBIcon } from 'mdb-vue-ui-kit'

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
  setup() {
    const activeClass = (path: string): string => {
      if (path === '/') return 'router-link-active'
      return 'router-link-active-custom'
    }
    return {
      activeClass
    }
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
  //color: #1266f1;
  color: inherit;
}
.router-link-exact-active {
  color: #1266f1;
}
.router-link-active-custom {
  color: #1266f1;
}
</style>
