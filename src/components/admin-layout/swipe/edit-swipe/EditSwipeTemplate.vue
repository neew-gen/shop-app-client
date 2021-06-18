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
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { object, string } from 'yup'

import { graphqlFetchBy, graphqlUpdate } from '@/services/GraphqlService/GraphqlService'
import { GET_SWIPE_BY_ID } from '@/services/GraphqlService/queries/swipeQueries'
import ErrorField from '@/components/shared/ErrorField.vue'
import Swipe from '@/components/public-layout/home/HomeSwiper/Swipe.vue'
import { awaitFetcher } from '@/services/FetchService/FetchService'
import { SwipeType, UpdateSwipeInput } from '@/types/swipe'

export default defineComponent({
  name: 'EditSwipe',
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
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    const toast = useToast()

    const schema = object({
      title: string().required().min(4).label('Swipe title'),
      imgUrl: string().required().url().label('Image URL'),
      text: string().required().min(10).label('Swipe text'),
    })

    const { values, errors, meta } = useForm({
      validationSchema: schema,
      initialValues: { title: '', imgUrl: '', text: '' },
    })
    useField<string>('title')
    useField<string>('imgUrl')
    useField<string>('text')

    const reset = (): void => {
      meta.value.valid = false
    }

    const onSubmit = (): void => {
      const { title, imgUrl, text } = values
      if (!(title && imgUrl && text)) return

      graphqlUpdate<UpdateSwipeInput>('swipe', props.id, {
        swipeData: { title, imgUrl, text },
      })
      reset()
      toast.success('Swipe has been edited!')
    }

    const res = await awaitFetcher<SwipeType>(
      'NF',
      `/edit-swipe-${props.id}`,
      () => graphqlFetchBy(GET_SWIPE_BY_ID, { id: props.id! }),
    )

    // TODO need to improve this
    const { title, imgUrl, text } = res!.swipeData
    values.title = meta.value.initialValues.title = title
    values.imgUrl = meta.value.initialValues.imgUrl = imgUrl
    values.text = meta.value.initialValues.text = text

    return { values, errors, meta, onSubmit }
  },
})
</script>

<style scoped lang="scss"></style>
