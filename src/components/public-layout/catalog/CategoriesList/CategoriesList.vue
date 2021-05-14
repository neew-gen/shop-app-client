<template>
  <MDBListGroup>
    <CategoriesListItem
      v-for="(item, index) in data"
      :key="index"
      :categoryId="item.id"
      :name="item.name"
      :img-url="item.imgUrl"
    />
  </MDBListGroup>
</template>

<script lang="ts">
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'

import CategoriesListItem from '@/components/public-layout/catalog/CategoriesList/CategoriesListItem.vue'
import { CategoryType } from '@/types/category'

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
