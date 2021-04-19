<template>
  <MDBContainer>
    <MDBRow class="ssc d-flex flex-column">
      <MDBCol>
        <div class="ssc-square image-block" />
      </MDBCol>
      <MDBCol class="price-block">
        <div class="ssc-line price-block__price" />
        <div class="ssc-line price-block__controls" />
      </MDBCol>
      <MDBCol class="name-block">
        <div class="ssc-line name-block__name" />
      </MDBCol>
      <MDBCol class="description-block">
        <div class="ssc-line description-block__description-line" />
        <div class="ssc-line description-block__description-line" />
        <div class="ssc-line description-block__description-line" />
        <div class="ssc-line description-block__description-line" />
        <div class="ssc-line description-block__description-line" />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MDBCol, MDBContainer, MDBRow } from 'mdb-vue-ui-kit'

export default defineComponent({
  name: 'ProductSkeleton',
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
  },
})
</script>

<style scoped lang="scss">
.image-block {
  height: 40vh;
  width: 100%;
}
.price-block {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__price {
    height: 21px;
    width: 95px;
    margin: 0;
  }
  &__controls {
    height: 36px;
    width: 140px;
  }
}
.name-block {
  padding: 16px 12px;
  display: flex;
  align-items: center;
  &__name {
    height: 22px;
    width: 40%;
    margin: 0;
  }
}
.description-block {
  height: 110px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__description-line {
    height: 16px;
  }
}
</style>
