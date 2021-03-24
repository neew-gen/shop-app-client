<template>
  <ul class="list-group">
    <EditListItem
      v-for="(item, index) in fetchedProducts"
      :key="index"
      :data="item"
    />
  </ul>
</template>

<script lang="ts">
import EditListItem from '@/components/EditList/EditListItem.vue'
import { defineComponent, ref } from 'vue'
import { ProductApi } from '@/api/product.api'
import { EditListProduct } from '@/types/product'
const QUERY = `
      query Products {
        products {
          id
          name
          img
        }
      }`
export default defineComponent({
  name: 'EditList',
  components: { EditListItem },
  async setup() {
    const fetchedProducts = ref<EditListProduct[]>([])
    fetchedProducts.value = await ProductApi.fetchProducts(QUERY, 'products')
    return { fetchedProducts }
  }
})
</script>

<style scoped lang="scss"></style>
