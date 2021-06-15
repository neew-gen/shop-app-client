<template>
  <MDBListGroupItem>
    <div class="edit-item">
      <div class="edit-item__image">
        <div
          class="edit-item__image__placeholder"
          v-if="!data.productData.images[0]"
        >
          <div>No photo.</div>
        </div>
        <ProductImage
          v-if="data.productData.images[0]"
          :images="[data.productData.images[0]]"
          height="140px"
          width="140px"
        />
      </div>
      <div class="edit-item__id">ID: {{ data._id }}</div>
      <div class="edit-item__name">
        Name: {{ textSlicer(data.productData.name, 20) }}
      </div>
      <div class="edit-item__controls">
        <MDBBtn color="dark" @click="removeItem">Delete</MDBBtn>
        <router-link
          class="btn btn-light"
          :to="{ name: 'edit-product', params: { _id: data._id } }"
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

import ProductImage from '@/components/public-layout/Product/ProductImage.vue'
import { graphqlMutate } from '@/services/GraphqlService/GraphqlService'
import { DELETE_PRODUCT } from '@/services/GraphqlService/queries/product/admin/productAdminQueriesEdit'
import { textSlicer } from '@/services/TextSlicerService/TextSlicerService'
import { ProductEditItem } from '@/types/product'

export default defineComponent({
  name: 'EditProductsItem',
  components: {
    ProductImage,
    MDBBtn,
    MDBListGroupItem,
  },
  props: {
    data: {
      type: Object as () => ProductEditItem,
    },
  },
  emits: ['deleteProduct'],
  setup(props, { emit }) {
    const toast = useToast()
    const removeItem = (): void => {
      if (!props.data) return
      graphqlMutate(DELETE_PRODUCT, { _id: props.data._id })
        .then(() => {
          emit('deleteProduct')
          toast.success('Product has been deleted!')
        })
        .catch(() => {
          toast.error('Sorry, it did not delete :(')
        })
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
    &__placeholder {
      height: 140px;
      width: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
