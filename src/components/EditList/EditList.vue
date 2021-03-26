<template>
  <ul class="list-group">
    {{
      f
    }}
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
import { defineComponent, inject, ref, reactive, computed } from 'vue'
import { EditListType } from '@/types'
import { GraphqlApi } from '@/api/GraphqlApi'
import { GET_PRODUCTS_EDITLIST } from '@/api/queries/productQueries'
import { GET_CATEGORIES_EDITLIST } from '@/api/queries/categoryQueries'

export default defineComponent({
  name: 'EditList',
  props: {
    entity: {
      type: String,
      required: true
    }
  },
  components: { EditListItem },
  async setup(props, context) {
    const eventBus: any = inject('eventBus')
    let fetchedItems = reactive<EditListType[]>([])
    const f = ref(0)
    eventBus.$on('update', async () => {
      console.log('update')
      f.value += 1
    })
    if (props.entity === 'product') {
      fetchedItems = await GraphqlApi.fetchAll<EditListType>(
        GET_PRODUCTS_EDITLIST
      )
    }
    if (props.entity === 'category') {
      fetchedItems = await GraphqlApi.fetchAll<EditListType>(
        GET_CATEGORIES_EDITLIST
      )
    }
    return { fetchedItems, f }
  }
})
</script>

<style scoped lang="scss"></style>
