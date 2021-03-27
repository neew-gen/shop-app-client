<template>
  <ul class="list-group">
    <EditListItem
      v-for="(item, index) in fetchedItems"
      :key="index"
      :data="item"
      :entity="entity"
    />
  </ul>
</template>

<script lang="ts">
import EditListItem from '@/components/EditList/EditListItem.vue'
import { defineComponent, computed, ComputedRef } from 'vue'
import { useStore } from '@/store'
import { EditListType } from '@/types'

export default defineComponent({
  name: 'EditList',
  props: {
    entity: {
      type: String,
      required: true
    }
  },
  components: { EditListItem },
  async setup(props) {
    const store = useStore()

    if (props.entity === 'product') {
      await store.dispatch('fetchProductsEditList')
      const fetchedItems: ComputedRef<EditListType[]> = computed(() => {
        return store.getters.getProductsEditList
      })
      return { fetchedItems }
    }
    if (props.entity === 'category') {
      console.log('category')
      await store.dispatch('fetchCategoryEditList')
      const fetchedItems: ComputedRef<EditListType[]> = computed(() => {
        return store.getters.getCategoryEditList
      })
      return { fetchedItems }
    }
  }
})
</script>

<style scoped lang="scss"></style>
