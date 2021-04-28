<template>
  <div class="footer-navbar-fake" />
  <MDBNavbar class="footer-navbar" light bg="light" position="bottom" container>
    <MDBListGroup horizontal class="flex-fill">
      <FooterButton
        v-for="(item, index) in MENU_LIST"
        :key="index"
        :icon="item.icon"
        :path="item.path"
      />
    </MDBListGroup>
  </MDBNavbar>
</template>

<script lang="ts">
import { MDBListGroup, MDBNavbar } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import FooterButton from '@/components/public-layout/Footer/FooterButton.vue'

import { MENU_LIST } from './data.json'

export default defineComponent({
  name: 'PublicFooter',
  components: { MDBListGroup, MDBNavbar, FooterButton },
  setup() {
    return {
      MENU_LIST,
    }
  },
})
</script>

<style lang="scss" scoped>
.footer-navbar {
  height: 50px;
}
.footer-navbar-fake {
  padding-top: 50px;
}
</style>
