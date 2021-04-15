<template>
  <MDBContainer>
    <MDBRow>
      <MDBCol
        class="d-flex flex-column"
        col="6"
        v-for="(item, index) in SKELETON_COUNT"
        :key="index"
      >
        <div class="item-wrapper ssc">
          <div class="ssc-square item-image" />
          <div class="price-row">
            <div class="ssc-line price-row__price" />
          </div>
          <div class="name-row">
            <div class="ssc-line name-row__line" />
            <div class="ssc-line name-row__line" />
            <div class="ssc-line name-row__line" />
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBRow, MDBCol, MDBContainer } from 'mdb-vue-ui-kit'
const SKELETON_COUNT = 8

export default defineComponent({
  name: 'ProductsListSkeleton',
  components: {
    MDBContainer,
    MDBRow,
    MDBCol
  },
  setup() {
    return {
      SKELETON_COUNT
    }
  }
})
</script>

<style scoped lang="scss">
.item-wrapper {
  margin: 3px;
}
.price-row {
  height: 38px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__price {
    height: 17.6px;
    width: 100%;
    margin: 0;
  }
}
.name-row {
  padding: 5px;
  height: 61px;
  display: flex;
  flex-direction: column;
  &__line {
    height: 14.4px;
    width: 100%;
  }
}
.item-image {
  height: 150px;
  width: 100%;
}
</style>
