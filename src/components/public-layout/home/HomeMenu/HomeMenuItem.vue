<template>
  <MDBListGroupItem class="home-menu-item" @mouseup="pushRouter">
    <div>{{ itemText }}</div>
    <MDBIcon
      class="menu-logo"
      :class="animationName"
      :icon="iconName"
      iconStyle="fas"
    />
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBIcon, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import router from '@/router'

export default defineComponent({
  name: 'HomeMenuItem',
  components: {
    MDBIcon,
    MDBListGroupItem,
  },
  props: {
    iconName: {
      type: String,
      required: true,
    },
    itemText: {
      type: String,
      required: true,
    },
    animationName: {
      type: String,
      required: true,
    },
    sortParameter: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const pushRouter = (): void => {
      router.push({
        name: 'home-products',
        params: { sortParameter: props.sortParameter },
      })
    }
    return { pushRouter }
  },
})
</script>

<style scoped lang="scss">
.menu-logo {
  font-size: 1.3rem;
  padding: 1rem 0;
}
.home-menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
}
.red-spark {
  animation: red-spark 6s infinite;
  @keyframes red-spark {
    0% {
      color: inherit;
    }
    50% {
      color: #f93154;
    }
    100% {
      color: inherit;
    }
  }
}
.blue-opacity {
  animation: blue-opacity 6s infinite;
  @keyframes blue-opacity {
    0% {
      color: inherit;
      opacity: 0.1;
    }
    50% {
      color: #1266f1;
      opacity: 1;
    }
    100% {
      color: inherit;
      opacity: 0.1;
    }
  }
}
</style>
