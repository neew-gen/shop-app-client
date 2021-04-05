<template>
  <ListItem v-for="(item, index) in listItems" :key="index" :data="item" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from '@/components/HomeList/ListItem.vue'
import { HomeListItemType } from '@/types'

export default defineComponent({
  name: 'HomeList',
  components: { ListItem },
  setup() {
    const listItems: HomeListItemType[] = [
      {
        imgPath: 'list.svg',
        text: 'Смотреть все'
      },
      {
        imgPath: 'new.svg',
        text: 'Новинки'
      },
      {
        imgPath: 'sale.svg',
        text: 'Распродажа'
      },
      {
        imgPath: 'gift.svg',
        text: 'Подарок при покупке'
      }
    ]
    return { listItems }
  }
})
</script>

<style scoped lang="scss"></style>
