<template>
  <!--      TODO need to fix bug with borders in list items. temporary solution: borders of 0.5 pixels. They overlap each other.  -->
  <MDBListGroupItem
    class="swipe-item d-flex justify-content-between align-items-center p-1"
  >
    <div class="swipe-item__title">Title: {{ data.swipeData.title }}</div>
    <div class="d-flex align-items-center">
      <MDBBtn
        class="swipe-item__options m-1"
        color="light"
        size="sm"
        @click="changeModalMode(true)"
      >
        Options
      </MDBBtn>
      <div class="draggable btn btn-sm active m-1">
        <MDBIcon icon="align-justify" iconStyle="fas" />
      </div>
    </div>
  </MDBListGroupItem>

  <BottomModal :show="modalMode" :changeModal="changeModalMode">
    <template v-slot:modal-header>
      <div>Title: {{ data.swipeData.title }}</div>
      <MDBBtn size="sm" color="dark" @click="changeModalMode(false)">
        Close
      </MDBBtn>
    </template>

    <template v-slot:modal-body>
      <Swipe :data="data.swipeData" />
    </template>

    <template v-slot:modal-footer>
      <MDBBtn class="m-1" size="sm" color="dark" @click="removeItem"
        >Delete</MDBBtn
      >
      <router-link
        class="btn btn-light btn-sm m-1"
        :to="{
          name: `EditSwipeSuspense`,
          params: { id: data.id }
        }"
      >
        Edit
      </router-link>
    </template>
  </BottomModal>
</template>

<script lang="ts">
import { defineComponent, inject, ref, PropType } from 'vue'
import { MDBListGroupItem, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit'
import { SwipeType } from '@/types/swipe'
import BottomModal from '@/components/BottomModal.vue'
import Swipe from '@/components/public-layout/home/HomeContent/HomeSwiper/Swipe.vue'
// import { store } from '@/store'

export default defineComponent({
  name: 'EditSwipeListItem',
  components: {
    Swipe,
    BottomModal,
    MDBListGroupItem,
    MDBBtn,
    MDBIcon
  },
  props: {
    data: {
      type: Object as PropType<SwipeType>
    }
  },
  setup(props) {
    const toast: any = inject('toast')
    const modalMode = ref(false)
    const changeModalMode = (newValue: boolean): void => {
      modalMode.value = newValue
    }

    const removeItem = (): void => {
      // store.dispatch('deleteSwipe', props.data!.id)
      toast.error('Swipe has been deleted!')
      changeModalMode(false)
    }
    return { modalMode, changeModalMode, removeItem }
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
</style>
