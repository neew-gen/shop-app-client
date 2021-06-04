<template>
  <MDBListGroup class="HomeSearchResult">
    <HomeSearchResultItem
      v-for="item in searchResult"
      :data="item"
      :key="item._id"
    />
  </MDBListGroup>
</template>

<script lang="ts">
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'

import HomeSearchResultItem from '@/components/public-layout/home/HomeSearchResult/HomeSearchResultItem.vue'
import { ProductSearchItem } from '@/types/product'

export default defineComponent({
  name: 'HomeSearchResult',
  components: {
    HomeSearchResultItem,
    MDBListGroup,
  },
  props: {
    searchResult: {
      type: Array as PropType<ProductSearchItem[]>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
