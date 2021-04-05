<template>
  <div></div>
  <!--  <ul class="list-group">-->
  <!--    <li v-for="item in categories" :key="item.key" class="list-group-item">-->
  <!--      <router-link-->
  <!--        :to="{ name: `CatalogSection`, params: { category: item.key } }"-->
  <!--        class="custom-link d-flex justify-content-start"-->
  <!--      >-->
  <!--        <div class="image-container">-->
  <!--          <img :src="computeImagePath(item.img)" alt="" />-->
  <!--        </div>-->
  <!--        <div>{{ item.name }}</div>-->
  <!--      </router-link>-->
  <!--    </li>-->
  <!--  </ul>-->
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, computed, ComputedRef } from 'vue'
import { CategoriesItemType } from '@/types'
export default defineComponent({
  name: 'CategoriesMenu'
  // setup() {
  //   const store = useStore()
  //   const categories: ComputedRef<CategoriesItemType[]> = computed(
  //     (): CategoriesItemType[] => store.getters.categoriesGet
  //   )
  //   const computeImagePath = (img: string): string => {
  //     return require(`../../assets/catalog/categories/${img}`)
  //   }
  //   return {
  //     categories,
  //     computeImagePath
  //   }
  // }
})
</script>

<style lang="scss" scoped>
.custom-link {
  color: black;
  text-decoration: none;
}
.custom-link:active,
.custom-link:visited {
  color: inherit;
}
.image-container {
  height: 25px;
  margin-right: 10px;
  > img {
    height: 100%;
    width: auto;
  }
}
</style>
