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

        <MDBBtn color="light" type="submit" :disabled="!meta.valid">
          Add Category
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

import { graphqlCreate } from '@/services/GraphqlService/GraphqlService'
import ErrorField from '@/components/ErrorField.vue'
import CategoriesListItem from '@/components/public-layout/catalog/CategoriesList/CategoriesListItem.vue'
import { CategoryCreateInput } from '@/types/category'

export default defineComponent({
  name: 'create-category',
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
    const toast = useToast()

    const showDropdown = ref(false)

    const schema = object({
      name: string().required().min(4).label('Category name'),
      imgUrl: string().required().url().label('Image URL'),
      isPublic: boolean().required().oneOf([false, true]),
    })
    const { values, errors, meta, resetForm } = useForm({
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
      resetForm()
      meta.value.valid = false
    }

    const onSubmit = (): void => {
      const { name, imgUrl, isPublic } = values
      if (!(name && imgUrl && isPublic)) return

      graphqlCreate<CategoryCreateInput>('category', {
        name,
        imgUrl,
        isPublic,
      })

      reset()
      toast.success('Category has been created!')
    }
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
