<template>
  <MDBListGroup>
    <MDBListGroupItem
      class="d-flex align-items-center border-0"
      v-for="(item, index) in data"
      :key="index"
      @click="routerPush(item.id)"
    >
      <div class="item-image">
        <ImageContainer
          height="60px"
          width="90px"
          :img-url="item.imgUrl"
          :name="item.name"
        />
      </div>
      <div class="item-name">{{ item.name }}</div>
    </MDBListGroupItem>
  </MDBListGroup>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MDBListGroup, MDBListGroupItem } from 'mdb-vue-ui-kit'
import router from '@/router'
import { CategoryType } from '@/types/category'
import ImageContainer from '@/components/ImageContainer.vue'

export default defineComponent({
  name: 'CategoriesList',
  props: {
    data: {
      type: Array as PropType<CategoryType[]>,
    },
  },
  components: {
    MDBListGroup,
    ImageContainer,
    MDBListGroupItem,
  },
  setup() {
    const routerPush = (categoryId: string): void => {
      router.push({
        name: 'CatalogProducts',
        params: { categoryId },
      })
    }
    return { routerPush }
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
