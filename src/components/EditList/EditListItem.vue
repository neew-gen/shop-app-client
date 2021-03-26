<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
      <div>
        <div class="image-container">
          <img :src="data.imgUrl" alt="" v-if="checkImgValidate(data.imgUrl)" />
          <div v-else>No image</div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-end justify-content-between">
        <div>ID: {{ data.id }}</div>
        <div>Name: {{ data.name }}</div>
        <div>
          <button class="btn btn-danger" type="button" @click="removeItem()">
            Delete
          </button>
          <router-link
            class="btn btn-info"
            :to="{ name: `${choosePathTo()}`, params: { id: data.id } }"
          >
            Edit
          </router-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { EditListType } from '@/types'
import { GraphqlApi } from '@/api/GraphqlApi'

export default defineComponent({
  name: 'EditListItem',
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
    const toast: any = inject('toast')
    const eventBus: any = inject('eventBus')

    const checkImgValidate = (imgUrl: string): boolean => {
      return imgUrl.match(/(http(s?))/gim) != null
    }
    const choosePathTo = (): string | undefined => {
      if (props.entity === 'product') return 'EditProductSuspense'
      if (props.entity === 'category') return 'EditCategorySuspense'
    }

    const removeItem = (): void => {
      if (props.entity === 'product') {
        // GraphqlApi.deleteProduct(props.data!.id)
        eventBus.$emit('update')
        toast.error('Product has been deleted!')
      }
      // does not allow us to return to the deleted product page
      // router.replace({ path: '/admin-panel/edit-products' })
    }
    return {
      checkImgValidate,
      choosePathTo,
      removeItem
    }
  }
})
</script>

<style scoped lang="scss">
.image-container {
  height: 120px;
  margin-right: 10px;
  > img {
    height: 100%;
    width: auto;
  }
}
</style>
