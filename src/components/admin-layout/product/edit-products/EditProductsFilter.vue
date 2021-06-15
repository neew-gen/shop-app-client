<template>
  <Filter>
    <CategoryDropdown @updateCategoryDropdown="updateCategoryDropdown" />
    <OrderDropdown @updateOrderDropdown="updateOrderDropdown" />
  </Filter>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CategoryDropdown from '@/components/shared/CategoryDropdown/CategoryDropdown.vue'
import Filter from '@/components/shared/Filter/Filter.vue'
import OrderDropdown from '@/components/shared/OrderDropdown/OrderDropdown.vue'
import { ProductOrder } from '@/types/product'

export default defineComponent({
  name: 'EditProductsFilter',
  components: {
    Filter,
    OrderDropdown,
    CategoryDropdown,
  },
  emits: ['updateCategoryDropdown', 'updateOrderDropdown'],
  setup(props, { emit }) {
    const updateCategoryDropdown = (newCategoryId: string): void => {
      emit('updateCategoryDropdown', newCategoryId)
    }
    const updateOrderDropdown = (newOrder: ProductOrder): void => {
      emit('updateOrderDropdown', newOrder)
    }
    return {
      updateCategoryDropdown,
      updateOrderDropdown,
    }
  },
})
</script>

<style scoped lang="scss">
.filter-title {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  caret-color: transparent;
  //padding: 5px;
  //position: fixed;
  //left: 0;
  //z-index: 2;
}
.filter-footer {
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  caret-color: transparent;
}
//.filter-title-padding {
//  padding-bottom: 50px;
//}
//.navbar {
//  height: 50px;
//  width: 100%;
//  padding: 5px;
//  position: fixed;
//  left: 0;
//  z-index: 2;
//}
//.filter-fake {
//  padding-bottom: 100px;
//}
//.filter-title {
//  line-height: 1.2;
//}
</style>
