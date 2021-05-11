<template>
  <MDBContainer :style="{ position: modal ? 'fixed' : 'relative' }">
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <ProductNameInput class="mt-4" />
      <ProductCategoryInput />
      <ProductImagesInput @modal="updateModal" />
      <ProductDescriptionInput />
      <ProductPriceInput />
      <ProductCountInput />
      <ProductDiscountInput />
      <ProductShowInput />

      <MDBCol col="12" class="d-flex justify-content-end mb-2">
        <MDBBtn color="light" type="submit"> Add Product </MDBBtn>
      </MDBCol>
      <div>Данные о товаре, которые потом будут отправлены на сервак</div>
      {{ productInput }}
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { useField, useForm } from 'vee-validate'
import {
  computed,
  ComputedRef,
  defineComponent,
  onUnmounted,
  ref,
  watch,
} from 'vue'
import { useToast } from 'vue-toastification'
import { array, number, object, string } from 'yup'

import { graphqlCreate } from '@/api/graphql-api/GraphqlApi'
import ProductCategoryInput from '@/components/admin-layout/product/inputs/ProductCategoryInput.vue'
import ProductCountInput from '@/components/admin-layout/product/inputs/ProductCountInput.vue'
import ProductDescriptionInput from '@/components/admin-layout/product/inputs/ProductDescriptionInput.vue'
import ProductDiscountInput from '@/components/admin-layout/product/inputs/ProductDiscountInput.vue'
import ProductImagesInput from '@/components/admin-layout/product/inputs/ProductImagesInput.vue'
import ProductNameInput from '@/components/admin-layout/product/inputs/ProductNameInput.vue'
import ProductPriceInput from '@/components/admin-layout/product/inputs/ProductPriceInput.vue'
import ProductShowInput from '@/components/admin-layout/product/inputs/ProductShowInput.vue'
import { useStore } from '@/store'
import { CreateProductInput } from '@/types/product'

export default defineComponent({
  name: 'create-product',
  components: {
    ProductDiscountInput,
    ProductDescriptionInput,
    ProductImagesInput,
    ProductPriceInput,
    ProductNameInput,
    ProductCategoryInput,
    ProductShowInput,
    ProductCountInput,
    MDBBtn,
    MDBRow,
    MDBContainer,
    MDBCol,
  },
  setup() {
    const toast = useToast()
    const store = useStore()

    const modal = ref(false)
    const updateModal = (newValue: boolean): void => {
      modal.value = newValue
    }
    const productInput: ComputedRef<CreateProductInput> = computed(() => {
      return store.getters.getProductInput
    })
    // const unwatch = watch(productInput.value, (value) => {
    //   values.name = value.productData.name
    //   values.images = value.productData.images
    //   values.price = value.productData.price
    //   values.count = value.count
    //   values.discountpercentage = value.productData.discount.percentage
    // })
    // const schema = object({
    //   name: string().required().min(4).label('Product name'),
    //   images: array().required().min(1).label('Product images'),
    //   price: number().required().min(0).label('Product price'),
    //   count: number().required().min(0).label('Product count'),
    //   discountpercentage: number().required().min(0).label('Discount %'),
    // })
    // const { values, errors, meta } = useForm({
    //   validationSchema: schema,
    //   initialValues: {
    //     name: '',
    //     images: [],
    //     price: 0,
    //     count: 0,
    //     discountpercentage: 0,
    //   },
    // })
    // useField<string>('name')
    // useField<[]>('images')
    // useField<number>('price')
    // useField<number>('count')
    // useField<number>('discountpercentage')
    //
    // const unwatch = store.watch(
    //   () => store.getters.getCategoryDropdown,
    //   (value) => {
    //     values.categoryId = value
    //   },
    // )
    //
    // const reset = (): void => {
    //   resetForm()
    //   meta.value.valid = false
    // }

    const onSubmit = (e: any): void => {
      // console.log(errors.value)
      // const { name, imgUrl, price, description, categoryId } = values
      // if (!(name && imgUrl && price && description)) return
      graphqlCreate<CreateProductInput>('product', productInput.value)
      // reset()
      // store.dispatch('updateCategoryDropdown', undefined)
      toast.success('Product has been created!')
    }

    // onUnmounted(() => {
    //   unwatch()
    //   // store.dispatch('updateCategoryDropdown', undefined)
    // })

    return {
      modal,
      updateModal,
      // values,
      // errors,
      productInput,
      onSubmit,
    }
  },
})
</script>

<style scoped lang="scss">
.update-btn {
  width: 176px;
}
</style>
