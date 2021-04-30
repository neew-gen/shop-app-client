<template>
  <MDBListGroup>
    <CartListItem v-for="(item, index) in data" :key="index" :data="item" />
  </MDBListGroup>
</template>

<script lang="ts">
import { MDBListGroup } from 'mdb-vue-ui-kit'
import { defineComponent, PropType } from 'vue'

import CartListItem from '@/components/public-layout/cart/CartList/CartItem/CartItem.vue'
import { ProductCartItem } from '@/types/product'

export default defineComponent({
  name: 'CartList',
  props: {
    data: {
      type: Array as PropType<ProductCartItem[]>,
    },
  },
  components: {
    CartListItem,
    MDBListGroup,
  },
})
</script>

<style scoped lang="scss"></style>
