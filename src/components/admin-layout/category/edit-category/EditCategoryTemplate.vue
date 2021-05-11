<template>
  <MDBContainer>
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <MDBCol col="12">
        <CategoriesListItem :name="values.name" :img-url="values.imgUrl" />
      </MDBCol>

      <MDBCol col="12">
        <MDBInput label="Category Name" name="name" v-model="values.name" />
        <ErrorField> {{ errors.name }} </ErrorField>
      </MDBCol>

      <MDBCol col="12">
        <MDBInput
          label="Image Url"
          type="text"
          name="imgUrl"
          v-model="values.imgUrl"
        />
        <ErrorField> {{ errors.imgUrl }} </ErrorField>
      </MDBCol>

      <MDBCol col="12" class="d-flex justify-content-between">
        <!--suppress HtmlDeprecatedAttribute -->
        <MDBDropdown align="start" v-model="showDropdown">
          <MDBDropdownToggle
            class="category-dropdown"
            @click="showDropdown = !showDropdown"
          >
            Visibility:
            {{ values.isPublic === true ? 'Public' : 'Hidden' }}
          </MDBDropdownToggle>
          <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
            <MDBDropdownItem
              class="dropdown-item"
              @click="changeIsPublic(false)"
            >
              Hidden
            </MDBDropdownItem>
            <MDBDropdownItem
              class="dropdown-item"
              @click="changeIsPublic(true)"
            >
              Public
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

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
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput,
  MDBRow,
} from 'mdb-vue-ui-kit'
import { useField, useForm } from 'vee-validate'
import { defineComponent, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { boolean, object, string } from 'yup'

import { awaitFetcher } from '@/api/fetch'
import { graphqlFetchBy, graphqlUpdate } from '@/api/graphql-api/GraphqlApi'
import { GET_CATEGORY_BY_ID } from '@/api/graphql-api/queries/categoryQueries'
import ErrorField from '@/components/ErrorField.vue'
import CategoriesListItem from '@/components/public-layout/catalog/CategoriesList/CategoriesListItem.vue'
import { CategoryType, CategoryUpdateInput } from '@/types/category'

export default defineComponent({
  name: 'EditCategoryTemplate',
  components: {
    ErrorField,
    CategoriesListItem,
    MDBInput,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBRow,
    MDBCol,
    MDBContainer,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    const toast = useToast()

    const showDropdown = ref(false)

    const schema = object({
      name: string().required().min(4).label('Category name'),
      imgUrl: string().required().url().label('Image URL'),
      isPublic: boolean().required().oneOf([false, true]),
    })
    const { values, errors, meta } = useForm({
      validationSchema: schema,
      initialValues: { name: '', imgUrl: '', isPublic: true },
    })
    useField<string>('name')
    useField<string>('imgUrl')
    useField<boolean>('isPublic')

    const changeIsPublic = (newValue: boolean): void => {
      values.isPublic = newValue
      showDropdown.value = false
    }
    const reset = (): void => {
      meta.value.valid = false
    }

    const onSubmit = (): void => {
      graphqlUpdate<CategoryUpdateInput>('category', props.id, values)
      reset()
      toast.success('Category has been edited!')
    }
    const res = await awaitFetcher<CategoryType>(
      'NF',
      `/edit-category-${props.id}`,
      () => graphqlFetchBy(GET_CATEGORY_BY_ID, { id: props.id! }),
    )
    // TODO need to improve this
    const { name, imgUrl, isPublic } = res!
    values.name = meta.value.initialValues.name = name
    values.imgUrl = meta.value.initialValues.imgUrl = imgUrl
    values.isPublic = meta.value.initialValues.isPublic = isPublic

    return {
      showDropdown,
      values,
      errors,
      meta,
      changeIsPublic,
      onSubmit,
    }
  },
})
</script>

<style scoped lang="scss"></style>
