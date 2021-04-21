<template>
  <MDBContainer>
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <MDBCol col="12">
        <Swipe :data="values" />
      </MDBCol>

      <MDBCol col="12">
        <MDBInput label="Image Url" v-model="values.imgUrl" />
        <ErrorField>{{ errors.imgUrl }}</ErrorField>
      </MDBCol>

      <MDBCol col="12">
        <MDBInput label="Swipe title" v-model="values.title" />
        <ErrorField>{{ errors.title }}</ErrorField>
      </MDBCol>

      <MDBCol col="12">
        <MDBTextarea label="Swipe text" rows="4" v-model="values.text" />
        <ErrorField>{{ errors.text }}</ErrorField>
      </MDBCol>

      <MDBCol col="12" class="d-flex justify-content-end">
        <MDBBtn color="light" type="submit" :disabled="!meta.valid">
          Add Swipe
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
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { object, string } from 'yup'

import { graphqlCreate } from '@/api/graphql-api/GraphqlApi'
import Swipe from '@/components/public-layout/home/HomeContent/HomeSwiper/Swipe.vue'
import { SwipeData } from '@/types/swipe'
import ErrorField from '@/components/ErrorField.vue'

export default defineComponent({
  name: 'CreateSwipe',
  components: {
    ErrorField,
    MDBContainer,
    MDBRow,
    MDBCol,
    Swipe,
    MDBInput,
    MDBTextarea,
    MDBBtn,
  },
  setup() {
    const toast = useToast()

    const schema = object({
      title: string().required().min(4).label('Swipe title'),
      imgUrl: string().required().url().label('Image URL'),
      text: string().required().min(10).label('Swipe text'),
    })
    const { values, errors, meta, resetForm } = useForm({
      validationSchema: schema,
      initialValues: { title: '', imgUrl: '', text: '' },
    })
    useField<string>('title')
    useField<string>('imgUrl')
    useField<string>('text')

    const reset = (): void => {
      resetForm()
      meta.value.valid = false
    }

    const onSubmit = (): void => {
      const { title, imgUrl, text } = values
      if (!(title && imgUrl && text)) return

      graphqlCreate<SwipeData>('swipe', { title, imgUrl, text })

      reset()
      toast.success('Swipe has been created!')
    }

    return { values, errors, meta, onSubmit }
  },
})
</script>

<style scoped lang="scss"></style>
