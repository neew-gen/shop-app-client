<template>
  <MDBContainer>
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
        <ImageUploader />
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
        <MDBBtn
          color="light"
          type="submit"
          :disabled="!meta.dirty || !meta.valid"
        >
          Save changes
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
import { defineComponent, onUnmounted } from 'vue'
import { useToast } from 'vue-toastification'
import { number, object, string } from 'yup'

import { awaitUseFetch } from '@/api/fetch-api/useFetch'
import { graphqlFetchBy, graphqlUpdate } from '@/api/graphql-api/GraphqlApi'
import { GET_PRODUCT_BY_ID } from '@/api/graphql-api/queries/productQueries'
import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown.vue'
import ErrorField from '@/components/ErrorField.vue'
import ImageContainer from '@/components/ImageContainer.vue'
import ImageUploader from '@/components/ImageUploader/ImageUploader.vue'
import { useStore } from '@/store'
import { ProductType, ProductUpdateInput } from '@/types/product'

export default defineComponent({
  name: 'EditProductTemplate',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    ImageUploader,
    ErrorField,
    CategoryDropdown,
    MDBInput,
    MDBTextarea,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBContainer,
  },
  async setup(props) {
    const toast = useToast()
    const store = useStore()

    const schema = object({
      name: string().required().min(4).label('Product name'),
      imgUrl: string().required().url().label('Image URL'),
      price: number().required().min(0).label('Product price'),
      description: string().notRequired(),
      categoryId: string().notRequired(),
    })

    const unwatch = store.watch(
      () => store.getters.getCategoryDropdown,
      (value) => {
        values.categoryId = value
      },
    )

    const reset = (): void => {
      // resetForm()
      meta.value.valid = false
    }

    const { values, errors, meta } = useForm({
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

    const onSubmit = (): void => {
      values.price = Number(values.price)
      graphqlUpdate<ProductUpdateInput>('product', props.id, values)
      reset()
      toast.success('Product has been updated!')
    }
    onUnmounted(() => {
      unwatch()
      store.dispatch('updateCategoryDropdown', undefined)
    })

    const res = await awaitUseFetch<ProductType>(
      'SWR',
      `/edit-product-${props.id}`,
      () => graphqlFetchBy(GET_PRODUCT_BY_ID, { id: props.id! }),
    )
    // TODO need to improve this
    const { name, imgUrl, price, description, categoryId } = res!
    values.name = meta.value.initialValues.name = name
    values.imgUrl = meta.value.initialValues.imgUrl = imgUrl
    // TODO price's meta dirty does not work
    values.price = meta.value.initialValues.price = price
    values.description = meta.value.initialValues.description = description
    values.categoryId = meta.value.initialValues.categoryId = categoryId
    store.dispatch('updateCategoryDropdown', categoryId)

    return {
      values,
      errors,
      meta,
      onSubmit,
    }
  },
})
</script>

<style scoped lang="scss"></style>
