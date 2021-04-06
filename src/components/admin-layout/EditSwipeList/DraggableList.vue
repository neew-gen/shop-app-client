<template>
  <draggable
    v-model="dragData"
    group="people"
    @start="drag = true"
    @end="drag = false"
    item-key="swipeIndex"
    handle=".draggable"
    ghost-class="ghost"
  >
    <template #item="{element}">
      <div>
        <EditSwipeListItem :data="element" />
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, reactive, ref, watch } from 'vue'
import { store } from '@/store'
import draggable from 'vuedraggable'
import EditSwipeListItem from '@/components/admin-layout/EditSwipeList/EditSwipeListItem.vue'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'DraggableList',
  components: {
    EditSwipeListItem,
    draggable
  },
  props: {
    data: {
      type: Array as PropType<SwipeType[]>,
      required: true
    }
  },
  setup(props) {
    const toast: any = inject('toast')
    const dragData = ref(props.data)
    watch(dragData, (from, to) => {
      if (from.length === to.length) {
        store.dispatch('updateIndex', dragData.value)
        toast.success('Swipe order has been updated!')
      }
    })
    watch(props, () => {
      dragData.value = props.data
    })
    return { dragData }
  }
})
</script>

<style scoped lang="scss">
.swipe-item {
  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;
  &__title {
    font-size: 1.1rem;
    font-weight: 500;
  }
}
.ghost {
  opacity: 0.5;
  filter: invert(31%) sepia(1%) saturate(3743%) hue-rotate(14deg)
    brightness(95%) contrast(92%);
}
</style>
