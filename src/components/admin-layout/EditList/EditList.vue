<template>
  <div v-if="entity === 'product'">
    <EditListFilter />
  </div>
  <div
    v-if="fetchedItems.length === 0"
    class="d-flex justify-content-center pt-2"
  >
    No {{ entityPlaceholder() }} yet. You can&thinsp;
    <router-link :to="{ name: choosePathTo() }">create one</router-link>.
  </div>
  <MDBListGroup v-else>
    <EditListItem
      v-for="(item, index) in fetchedItems"
      :key="index"
      :data="item"
      :entity="entity"
    />
  </MDBListGroup>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, ref } from 'vue'
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { useStore } from '@/store'
import { EditListType } from '@/types'
import EditListItem from '@/components/admin-layout/EditList/EditListItem.vue'
import EditListFilter from '@/components/admin-layout/EditList/EditListFilter.vue'

export default defineComponent({
  name: 'EditList',
  props: {
    entity: {
      type: String,
      required: true
    }
  },
  components: { EditListFilter, EditListItem, MDBListGroup },
  async setup(props) {
    const store = useStore()

    const entityPlaceholder = (): string | undefined => {
      if (props.entity === 'product') return 'products'
      if (props.entity === 'category') return 'categories'
    }

    const choosePathTo = (): string | undefined => {
      if (props.entity === 'product') return 'CreateProduct'
      if (props.entity === 'category') return 'CreateCategory'
    }

    if (props.entity === 'product') {
      await store.dispatch('fetchProductsEditList')
      const fetchedItems: ComputedRef<EditListType[]> = computed(() => {
        return store.getters.getProductsEditList
      })
      return { fetchedItems, entityPlaceholder, choosePathTo }
    }
    if (props.entity === 'category') {
      await store.dispatch('fetchCategoryEditList')
      const fetchedItems: ComputedRef<EditListType[]> = computed(() => {
        return store.getters.getCategoryEditList
      })
      return { fetchedItems, entityPlaceholder, choosePathTo }
    }
  }
})
</script>

<style scoped lang="scss"></style>
