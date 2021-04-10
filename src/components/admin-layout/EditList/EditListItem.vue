<template>
  <MDBListGroupItem>
    <div class="d-flex justify-content-between">
      <div>
        <ImageContainer
          height="120px"
          width="120px"
          name="data.name"
          :img-url="data.imgUrl"
        />
      </div>
      <div class="d-flex flex-column align-items-start justify-content-between">
        <div class="item-id">ID: {{ data.id }}</div>
        <!--        TODO need to create a slicer func-->
        <div class="item-title">Name: {{ data.name.slice(0, 10) }}</div>
        <div class="d-flex">
          <MDBBtn color="dark" @click="removeItem()">Delete</MDBBtn>
          <router-link
            class="btn btn-light"
            :to="{ name: `${choosePathTo()}`, params: { id: data.id } }"
          >
            Edit
          </router-link>
        </div>
      </div>
    </div>
  </MDBListGroupItem>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { MDBBtn, MDBListGroupItem } from 'mdb-vue-ui-kit'
import { EditListType } from '@/types'
import { useStore } from '@/store'
import ImageContainer from '@/components/ImageContainer.vue'

export default defineComponent({
  name: 'EditListItem',
  components: { ImageContainer, MDBBtn, MDBListGroupItem },
  props: {
    data: {
      type: Object as () => EditListType
    },
    entity: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const toast: any = inject('toast')
    const choosePathTo = (): string | undefined => {
      if (props.entity === 'product') return 'EditProductSuspense'
      if (props.entity === 'category') return 'EditCategorySuspense'
    }

    const removeItem = (): void => {
      if (props.entity === 'product') {
        store.dispatch('deleteProduct', props.data!.id)
        toast.error('Product has been deleted!')
      }
      if (props.entity === 'category') {
        store.dispatch('deleteCategory', props.data!.id)
        toast.error('Category has been deleted!')
      }
    }
    return {
      choosePathTo,
      removeItem
    }
  }
})
</script>

<style scoped lang="scss">
.item-id {
  font-size: 0.8rem;
}
.item-title {
  font-weight: 500;
}
</style>
