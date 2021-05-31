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
    <template #item="{ element, index }">
      <div>
        <EditSwipesItem :data="element" :dragIndex="index" />
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { isEqual } from 'lodash'
import { defineComponent, onUnmounted, PropType, ref, watch } from 'vue'
import { useToast } from 'vue-toastification'
import draggable from 'vuedraggable'

import { graphqlUpdate } from '@/services/GraphqlService/GraphqlService'
import EditSwipesItem from '@/components/admin-layout/swipe/edit-swipes/EditSwipesItem.vue'
import { SwipeType, UpdateIndexInput } from '@/types/swipe'

export default defineComponent({
  name: 'DraggableList',
  components: {
    EditSwipesItem,
    draggable,
  },
  props: {
    data: {
      type: Array as PropType<SwipeType[]>,
      required: true,
    },
  },
  setup(props) {
    const toast = useToast()

    const dragData = ref(props.data)

    const unwatch = watch(props, () => {
      dragData.value = props.data
    })

    const saveBeforeLeave = (): void => {
      if (!isEqual(dragData.value, props.data)) {
        const indexInput = dragData.value.map((d: SwipeType, index) => {
          return { id: d.id, swipeIndex: index }
        })
        graphqlUpdate<UpdateIndexInput[]>('swipeIndex', 'none', indexInput)
        toast.success('Swipe order has been updated!')
      }
    }

    window.onbeforeunload = saveBeforeLeave

    onUnmounted(() => {
      saveBeforeLeave()
      unwatch()
      window.onbeforeunload = null
    })

    return { dragData }
  },
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
