<template>
  <MDBListGroupItem>
    <!--    <div class="edit-item">-->
    <!--      <div class="edit-item__image">-->
    <!--        <ProductImage-->
    <!--          height="140px"-->
    <!--          width="140px"-->
    <!--          :name="data.name"-->
    <!--          :images="[data.imgUrl]"-->
    <!--        />-->
    <!--      </div>-->

    <!--      <div class="edit-item__id">ID: {{ data.id }}</div>-->

    <!--      <div class="edit-item__name">Name: {{ textSlicer(data.name, 20) }}</div>-->

    <!--      <div class="edit-item__controls">-->
    <!--        <MDBBtn color="dark" @click="removeItem">Delete</MDBBtn>-->
    <!--        <router-link-->
    <!--          class="btn btn-light"-->
    <!--          :to="{ name: 'edit-category', params: { id: data.id } }"-->
    <!--        >-->
    <!--          Edit-->
    <!--        </router-link>-->
    <!--      </div>-->
    <!--    </div>-->
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBBtn, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'

import ProductImage from '@/components/public-layout/Product/ProductImage.vue'
import { eventBus } from '@/helpers/EventBus'
import { graphqlDelete } from '@/services/GraphqlService/GraphqlService'
import { textSlicer } from '@/services/TextSlicerService/TextSlicerService'
import { CategoryEditItem } from '@/types/category'

export default defineComponent({
  name: 'EditCategoriesItem',
  components: {
    // ProductImage, MDBBtn,
    MDBListGroupItem,
  },
  props: {
    data: {
      type: Object as () => CategoryEditItem,
    },
  },
  setup(props) {
    // const toast = useToast()
    // const removeItem = (): void => {
    //   if (!props.data) return
    //   graphqlDelete('category', props.data.id)
    //   toast.error('Category has been deleted!')
    //   eventBus.publish('edit-categories-update', undefined)
    // }
    // return { textSlicer, removeItem }
  },
})
</script>

<style scoped lang="scss">
.edit-item {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px 20px;
  align-items: center;
  grid-template-areas:
    'image id'
    'image name'
    'image controls';
  &__image {
    grid-area: image;
  }
  &__id {
    grid-area: id;
    font-size: 0.8rem;
  }
  &__name {
    grid-area: name;
    font-weight: 500;
  }
  &__controls {
    grid-area: controls;
    justify-self: end;
  }
}
</style>
