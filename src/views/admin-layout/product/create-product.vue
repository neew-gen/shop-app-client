<template>
  <MDBContainer :style="{ position: modal ? 'fixed' : 'relative' }">
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <MDBCol
        col="12"
        class="d-flex justify-content-between align-items-center"
      >
        <div>Category:</div>
        <CategoryDropdown />
      </MDBCol>

      <MDBCol col="12">
        <MDBInput label="Product Name" v-model="values.name" />
        <ErrorField>{{ errors.name }}</ErrorField>
      </MDBCol>

      <MDBCol col="12">
        <div class="d-flex justify-content-between py-1">
          <div>Images:</div>
          <div
            class="update-btn btn btn-default btn-sm"
            :class="imagesMenu ? 'btn-dark' : 'btn-default'"
            @click="updateImagesMenu(!imagesMenu)"
          >
            {{ imagesMenu ? 'Hide' : 'Show' }}&nbsp;the Images Menu
          </div>
        </div>
        <ImageUploader
          v-if="imagesMenu"
          @modal="updateModal"
          @files="updateImages"
          :images="images"
        />
        <!--        <MDBInput label="Image Url" v-model="values.imgUrl" />-->
        <!--        <ErrorField>{{ errors.imgUrl }}</ErrorField>-->
      </MDBCol>

      <MDBCol col="12">
        <MDBInput label="Price" type="number" v-model="values.price" />
        <ErrorField>{{ errors.price }}</ErrorField>
      </MDBCol>

      <MDBCol col="12">
        <MDBTextarea
          label="Description"
          rows="4"
          v-model="values.description"
        />
        <ErrorField>{{ errors.description }}</ErrorField>
      </MDBCol>
      <MDBCol col="12" class="d-flex justify-content-end mb-2">
        <MDBBtn color="light" type="submit" :disabled="!meta.valid">
          Add Product
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextarea,
} from 'mdb-vue-ui-kit'
import { useField, useForm } from 'vee-validate'
import { defineComponent, onUnmounted, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { number, object, string } from 'yup'

import { graphqlCreate } from '@/api/graphql-api/GraphqlApi'
import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown.vue'
import ErrorField from '@/components/ErrorField.vue'
import ImageContainer from '@/components/ImageContainer.vue'
import ImageUploader from '@/components/ImageUploader/ImageUploader.vue'
import { useStore } from '@/store'
import { ProductCreateInput } from '@/types/product'

export default defineComponent({
  name: 'create-product',
  components: {
    ImageUploader,
    ErrorField,
    CategoryDropdown,
    MDBInput,
    MDBTextarea,
    MDBBtn,
    MDBRow,
    MDBContainer,
    MDBCol,
  },
  setup() {
    const toast = useToast()
    const store = useStore()

    const images = ref([])
    const updateImages = (e: any): void => {
      images.value = e
    }

    const modal = ref(false)
    const updateModal = (newValue: boolean): void => {
      modal.value = newValue
    }

    const imagesMenu = ref(false)
    const updateImagesMenu = (newValue: boolean): void => {
      imagesMenu.value = newValue
    }

    const schema = object({
      name: string().required().min(4).label('Product name'),
      imgUrl: string().required().url().label('Image URL'),
      price: number().required().min(0).label('Product price'),
      description: string().notRequired(),
      categoryId: string().notRequired(),
    })
    const { values, errors, meta, resetForm } = useForm({
      validationSchema: schema,
      initialValues: {
        name: '',
        imgUrl: '',
        price: undefined,
        description: '',
        categoryId: '',
      },
    })
    useField<string>('name')
    useField<string>('imgUrl')
    useField<number>('price')
    useField<string>('description')
    useField<string>('categoryId')

    const unwatch = store.watch(
      () => store.getters.getCategoryDropdown,
      (value) => {
        values.categoryId = value
      },
    )

    const reset = (): void => {
      resetForm()
      meta.value.valid = false
    }

    const onSubmit = (): void => {
      const { name, imgUrl, price, description, categoryId } = values
      if (!(name && imgUrl && price && description)) return
      graphqlCreate<ProductCreateInput>('product', {
        name,
        imgUrl,
        price,
        description,
        categoryId,
      })
      reset()
      store.dispatch('updateCategoryDropdown', undefined)
      toast.success('Product has been created!')
    }

    onUnmounted(() => {
      unwatch()
      store.dispatch('updateCategoryDropdown', undefined)
    })

    return {
      modal,
      updateModal,
      updateImagesMenu,
      imagesMenu,
      values,
      errors,
      meta,
      onSubmit,
      images,
      updateImages,
    }
  },
})
</script>

<style scoped lang="scss">
.update-btn {
  width: 176px;
}
</style>
