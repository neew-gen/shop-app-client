<template>
  <div
    v-if="fetchedItems.length === 0"
    class="d-flex justify-content-center pt-2"
  >
    No swipes yet. You can&thinsp;
    <router-link :to="{ name: 'CreateSwipe' }">create one</router-link>.
  </div>
  <!--  i was getting a bug when set v-else-->
  <div v-if="fetchedItems.length !== 0">
    <div class="tips">
      <div>
        (to change the order, hold down
        <MDBIcon icon="align-justify" size="xs" iconStyle="fas" /> and drag)
      </div>
      <div>(to see a preview, press the "options" button)</div>
    </div>
    <DraggableList :data="fetchedItems" />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, watch } from 'vue'
import { MDBIcon } from 'mdb-vue-ui-kit'
import { store } from '@/store'
import { SwipeType } from '@/types/swipe'
import DraggableList from '@/components/admin-layout/EditSwipeList/DraggableList.vue'

export default defineComponent({
  name: 'EditSwipeList',
  components: {
    DraggableList,
    MDBIcon
  },
  async setup() {
    await store.dispatch('fetchSwipeEditList')
    const fetchedItems: ComputedRef<SwipeType[]> = computed(() => {
      return store.getters.getSwipeEditList
    })
    return {
      fetchedItems
    }
  }
})
</script>

<style scoped lang="scss">
.tips {
  font-size: 0.9rem;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4f4f4f;
}
</style>
