<template>
  <MDBContainer>
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <MDBCol col="12">
        <ImageContainer
          height="40vh"
          width="100%"
          :name="values.name"
          :img-url="values.imgUrl"
        />
      </MDBCol>

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
        <MDBInput label="Image Url" v-model="values.imgUrl" />
        <ErrorField>{{ errors.imgUrl }}</ErrorField>
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
import { defineComponent, onUnmounted } from 'vue'
import { useToast } from 'vue-toastification'
import { object, string, number } from 'yup'

import { graphqlCreate } from '@/api/graphql-api/GraphqlApi'
import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown.vue'
import ImageContainer from '@/components/ImageContainer.vue'
import { eventBus } from '@/helpers/EventBus'
import { CategoryIdType } from '@/types/eventBus'
import { ProductCreateInput } from '@/types/product'
import ErrorField from '@/views/admin-layout/ErrorField.vue'

export default defineComponent({
  name: 'CreateProduct',
  components: {
    ErrorField,
    CategoryDropdown,
    MDBInput,
    MDBTextarea,
    MDBBtn,
    ImageContainer,
    MDBRow,
    MDBContainer,
    MDBCol,
  },
  setup() {
    const toast = useToast()

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

    eventBus.subscribe('childUpdateCategory', (categoryId: CategoryIdType) => {
      values.categoryId = categoryId
    })

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
      eventBus.publish('parentUpdateCategory', values.categoryId)
      toast.success('Product has been created!')
    }

    onUnmounted(() => {
      eventBus.unsubscribe('childUpdateCategory')
    })

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
