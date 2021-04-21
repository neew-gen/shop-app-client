<template>
  <MDBListGroupItem>
    <div class="edit-item">
      <div class="edit-item__image">
        <ImageContainer
          height="140px"
          width="140px"
          :name="data.name"
          :img-url="data.imgUrl"
        />
      </div>
      <div class="edit-item__id">ID: {{ data.id }}</div>
      <div class="edit-item__name">Name: {{ textSlicer(data.name, 20) }}</div>
      <div class="edit-item__controls">
        <MDBBtn color="dark" @click="removeItem">Delete</MDBBtn>
        <router-link
          class="btn btn-light"
          :to="{ name: 'edit-product', params: { id: data.id } }"
        >
          Edit
        </router-link>
      </div>
    </div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { MDBBtn, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'

import { graphqlDelete } from '@/api/graphql-api/GraphqlApi'
import ImageContainer from '@/components/ImageContainer.vue'
import { textSlicer } from '@/helpers/slicer'
import { ProductEditItem } from '@/types/product'
import { eventBus } from '@/helpers/EventBus'

export default defineComponent({
  name: 'EditProductsItem',
  components: { ImageContainer, MDBBtn, MDBListGroupItem },
  props: {
    data: {
      type: Object as () => ProductEditItem,
    },
  },
  setup(props) {
    const toast = useToast()
    const removeItem = (): void => {
      if (!props.data) return
      graphqlDelete('product', props.data.id)
      toast.error('Product has been deleted!')
      eventBus.publish('edit-products-update', undefined)
    }
    return { textSlicer, removeItem }
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
