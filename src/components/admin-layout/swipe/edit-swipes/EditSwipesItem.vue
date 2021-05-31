<template>
  <MDBListGroupItem class="swipe-item">
    <div class="swipe-item__index">[{{ dragIndex + 1 }}]</div>

    <div class="swipe-item__title">
      {{ textSlicer(data.swipeData.title, 25) }}
    </div>

    <MDBBtn
      class="swipe-item__options"
      color="light"
      size="sm"
      @click="changeModalMode(true)"
    >
      Options
    </MDBBtn>

    <div class="swipe-item__drag draggable btn btn-sm active">
      <MDBIcon icon="align-justify" iconStyle="fas" />
    </div>
  </MDBListGroupItem>

  <BottomModal :show="modalMode" :changeModal="changeModalMode">
    <template v-slot:modal-header>
      <div>
        Title:
        {{ data.swipeData.title }}
      </div>
      <MDBBtn size="sm" color="dark" @click="changeModalMode(false)">
        Close
      </MDBBtn>
    </template>
    <template v-slot:modal-body>
      <Swipe :data="data.swipeData" />
    </template>
    <template v-slot:modal-footer>
      <MDBBtn class="m-1" color="dark" @click="removeItem"> Delete </MDBBtn>
      <router-link
        class="btn btn-light m-1"
        :to="{
          name: 'edit-swipe',
          params: { id: data.id },
        }"
      >
        Edit
      </router-link>
    </template>
  </BottomModal>
</template>

<script lang="ts">
import { MDBBtn, MDBIcon, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent, PropType, ref } from 'vue'
import { useToast } from 'vue-toastification'

import { graphqlDelete } from '@/services/GraphqlService/GraphqlService'
import BottomModal from '@/components/BottomModal.vue'
import Swipe from '@/components/public-layout/home/HomeContent/HomeSwiper/Swipe.vue'
import { eventBus } from '@/helpers/EventBus'
import { textSlicer } from '@/services/TextSlicerService/TextSlicerService'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'EditSwipesItem',
  components: {
    Swipe,
    BottomModal,
    MDBListGroupItem,
    MDBBtn,
    MDBIcon,
  },
  props: {
    data: {
      type: Object as PropType<SwipeType>,
    },
    dragIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const toast = useToast()
    const modalMode = ref(false)
    const changeModalMode = (newValue: boolean): void => {
      modalMode.value = newValue
    }

    const removeItem = (): void => {
      graphqlDelete('swipe', props.data!.id)
      eventBus.publish('edit-swipe-update', undefined)
      toast.error('Swipe has been deleted!')
      changeModalMode(false)
    }
    return { modalMode, changeModalMode, removeItem, textSlicer }
  },
})
</script>

<style scoped lang="scss">
.swipe-item {
  width: 100%;
  display: grid;
  padding: 5px;
  grid-template-columns: auto 1fr auto auto;
  grid-template-rows: 1fr;
  gap: 5px 5px;
  align-items: center;
  grid-template-areas: 'index title options drag';
  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;
  &__index {
    grid-area: index;
  }
  &__title {
    grid-area: title;
    font-size: 1.1rem;
    font-weight: 500;
  }
  &__options {
    grid-area: options;
  }
  &__drag {
    grid-area: drag;
  }
}
</style>
