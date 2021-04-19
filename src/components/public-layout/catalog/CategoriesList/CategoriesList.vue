<template>
  <MDBListGroup>
    <CategoriesListItem
      v-for="(item, index) in data"
      :key="index"
      :categoryId="item.id"
      :name="item.name"
      :img-url="item.imgUrl"
    />
    <!--    <MDBListGroupItem-->
    <!--      class="d-flex align-items-center border-0"-->
    <!--      v-for="(item, index) in data"-->
    <!--      :key="index"-->
    <!--      @click="routerPush(item.id)"-->
    <!--    >-->
    <!--      <div class="item-image">-->
    <!--        <ImageContainer-->
    <!--          height="60px"-->
    <!--          width="90px"-->
    <!--          :img-url="item.imgUrl"-->
    <!--          :name="item.name"-->
    <!--        />-->
    <!--      </div>-->
    <!--      <div class="item-name">{{ item.name }}</div>-->
    <!--    </MDBListGroupItem>-->
  </MDBListGroup>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { CategoryType } from '@/types/category'
import CategoriesListItem from '@/components/public-layout/catalog/CategoriesList/CategoriesListItem.vue'

export default defineComponent({
  name: 'CategoriesList',
  props: {
    data: {
      type: Array as PropType<CategoryType[]>,
    },
  },
  components: {
    CategoriesListItem,
    MDBListGroup,
  },
})
</script>

<style scoped lang="scss">
.item-image {
  border-radius: 4px;
}
.item-name {
  margin-left: 20px;
  font-weight: 500;
}
</style>
