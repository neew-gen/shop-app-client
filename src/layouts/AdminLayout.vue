<template>
  <AdminBreadcrumb />
  <MDBContainer>
    <MDBRow>
      <router-view />
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'

import AdminBreadcrumb from '@/components/admin-layout/AdminBreadcrumb/AdminBreadcrumb.vue'

export default defineComponent({
  name: 'AdminLayout',
  components: { MDBContainer, MDBRow, AdminBreadcrumb },
})
</script>

<style scoped lang="scss"></style>
