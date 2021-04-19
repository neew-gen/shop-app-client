<template>
  <MDBContainer>
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <MDBCol col="12">
        <div>Here's how it will look</div>
        <CategoriesListItem :name="name" :img-url="imgUrl" />
      </MDBCol>
      <MDBCol col="12">
        <MDBInput label="Category Name" name="name" v-model="name" />
        <ErrorField> {{ nameError }} </ErrorField>
      </MDBCol>
      <MDBCol col="12">
        <MDBInput
          label="Image Url"
          type="text"
          name="imgUrl"
          v-model="imgUrl"
        />
        <ErrorField> {{ imgUrlError }} </ErrorField>
      </MDBCol>
      <MDBCol col="12" class="d-flex justify-content-between">
        <!--suppress HtmlDeprecatedAttribute -->
        <MDBDropdown align="start" v-model="showDropdown">
          <MDBDropdownToggle
            class="category-dropdown"
            @click="showDropdown = !showDropdown"
          >
            Visibility:
            {{ isPublic === true ? 'Public' : 'Hidden' }}
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

        <MDBBtn color="light" type="submit" :disabled="!meta.valid"
          >Add Category</MDBBtn
        >
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { GraphqlApi } from '@/api/graphql-api/GraphqlApi'
import CategoriesListItem from '@/components/public-layout/catalog/CategoriesList/CategoriesListItem.vue'
import ErrorField from '@/views/admin-layout/ErrorField.vue'
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
import { defineComponent, inject, ref } from 'vue'
import * as yup from 'yup'
export default defineComponent({
  name: 'CreateCategory',
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
  setup() {
    const toast: any = inject('toast')
    const showDropdown = ref(false)
    const schema = yup.object({
      name: yup.string().required().min(4).label('Category name'),
      imgUrl: yup.string().required().url().label('Image URL'),
      isPublic: yup
        .boolean()
        .required()
        .oneOf([false, true])
        .label('Privat or Public'),
    })
    const { meta, resetForm } = useForm({
      validationSchema: schema,
      initialValues: { name: '', imgUrl: '', isPublic: true },
    })
    const { value: name, errorMessage: nameError } = useField<string>('name')
    const { value: imgUrl, errorMessage: imgUrlError } = useField<string>(
      'imgUrl',
    )
    const { value: isPublic, errorMessage: isPublicError } = useField<boolean>(
      'isPublic',
    )
    const changeIsPublic = (newValue: boolean): void => {
      isPublic.value = newValue
      showDropdown.value = false
    }
    const onSubmit = (): void => {
      GraphqlApi.createCategory({
        id: '',
        name: name.value,
        imgUrl: imgUrl.value,
        isPublic: isPublic.value,
      })
      resetForm()
      meta.value.valid = false
      toast.success('Category has been created!')
    }
    return {
      showDropdown,
      changeIsPublic,
      onSubmit,
      name,
      nameError,
      imgUrl,
      imgUrlError,
      isPublic,
      isPublicError,
      meta,
    }
  },
})
</script>

<style scoped lang="scss"></style>
