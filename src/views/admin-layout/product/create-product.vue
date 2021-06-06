<template>
  <MDBContainer :style="{ position: modal ? 'fixed' : 'relative' }">
    <MDBRow class="g-3">
      <ProductNameInput />
      <ProductCategoryInput />
      <ProductImagesInput @modal="updateModal" />
      <ProductDescriptionInput />
      <ProductPriceInput />
      <ProductCountInput />
      <ProductDiscountInput />
      <ProductShowInput />

      <CreateProductSubmitButton />
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBContainer, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent, ref } from 'vue'

import CreateProductSubmitButton from '@/components/admin-layout/product/create-product/CreateProductAddBlock.vue'
import ProductCountInput from '@/components/admin-layout/product/ProductInputs/ProductAmountInput.vue'
import ProductCategoryInput from '@/components/admin-layout/product/ProductInputs/ProductCategoryInput.vue'
import ProductDescriptionInput from '@/components/admin-layout/product/ProductInputs/ProductDescriptionInput.vue'
import ProductDiscountInput from '@/components/admin-layout/product/ProductInputs/ProductDiscountInput.vue'
import ProductImagesInput from '@/components/admin-layout/product/ProductInputs/ProductImagesInput/ProductImagesInput.vue'
import ProductNameInput from '@/components/admin-layout/product/ProductInputs/ProductNameInput.vue'
import ProductPriceInput from '@/components/admin-layout/product/ProductInputs/ProductPriceInput.vue'
import ProductShowInput from '@/components/admin-layout/product/ProductInputs/ProductShowInput.vue'

export default defineComponent({
  name: 'create-product',
  components: {
    CreateProductSubmitButton,
    ProductDiscountInput,
    ProductDescriptionInput,
    ProductImagesInput,
    ProductPriceInput,
    ProductNameInput,
    ProductCategoryInput,
    ProductShowInput,
    ProductCountInput,
    MDBRow,
    MDBContainer,
  },
  setup() {
    const modal = ref(false)
    const updateModal = (newValue: boolean): void => {
      modal.value = newValue
    }
    // const productInput: ComputedRef<CreateProductInput> = computed(() => {
    //   return store.getters.getProductInput
    // })
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

    // const onSubmit = (e: any): void => {
    //   // console.log(errors.value)
    //   // const { name, imgUrl, price, description, categoryId } = values
    //   // if (!(name && imgUrl && price && description)) return
    //   graphqlCreate<CreateProductInput>('product', productInput.value)
    //   // reset()
    //   // store.dispatch('updateCategoryDropdown', undefined)
    //   toast.success('Product has been created!')
    // }
    //
    // // onUnmounted(() => {
    // //   unwatch()
    // //   // store.dispatch('updateCategoryDropdown', undefined)
    // // })
    //
    return {
      modal,
      updateModal,
    }
  },
})
</script>

<style scoped lang="scss"></style>
