<template>
  <MDBListGroup>
    <MDBListGroupItem
      class="d-flex align-items-center"
      v-for="item in SKELETON_COUNT"
      :key="item"
    >
      <div class="ssc-square item-image" />
      <div class="ssc-line item-name" />
    </MDBListGroupItem>
  </MDBListGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBListGroup, MDBListGroupItem } from 'mdb-vue-ui-kit'
const SKELETON_COUNT = 8

export default defineComponent({
  name: 'CategoriesListSkeleton',
  components: { MDBListGroup, MDBListGroupItem },
  setup() {
    return {
      SKELETON_COUNT
    }
  }
})
</script>

<style scoped lang="scss">
.item-image {
  height: 60px;
  width: 90px;
}
.item-name {
  margin-left: 20px;
  height: 16px;
  width: 100px;
}
</style>
