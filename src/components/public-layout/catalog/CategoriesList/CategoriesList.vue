<template>
  <MDBListGroup>
    <MDBListGroupItem
      class="d-flex align-items-center border-0"
      v-for="(item, index) in fetchedItems"
      :key="index"
      @click="pushToProductsByCategory(item.id)"
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
import { computed, ComputedRef, defineComponent } from 'vue'
import { MDBListGroup, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { store } from '@/store'
import { CategoryType } from '@/types/category'
import ImageContainer from '@/components/ImageContainer.vue'
import router from '@/router'

export default defineComponent({
  name: 'CategoriesList',
  components: { MDBListGroup, ImageContainer, MDBListGroupItem },
  async setup() {
    const pushToProductsByCategory = (categoryId: string): void => {
      router.push({
        name: 'ProductsByCategorySuspense',
        params: { categoryId }
      })
    }
    // timer for the skeleton loader demonstration
    // const p1 = await new Promise(res => setTimeout(() => res('p1'), 3000))
    // console.log(p1)

    await store.dispatch('fetchCategoryCatalogList')
    const fetchedItems: ComputedRef<CategoryType[]> = computed(() => {
      return store.getters.getCategoryCatalogList
    })
    return {
      pushToProductsByCategory,
      fetchedItems
    }
  }
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
