<template>
  <div class="d-grid gap-3">
    <CreateProductNameInput />
    <CreateProductCategoryInput />
    <CreateProductImagesInput @modal="updateModal" />
    <CreateProductDescriptionInput />
    <CreateProductPriceInput />
    <CreateProductAmountInput />
    <CreateProductDiscountInput />
    <CreateProductShowInput />

    <CreateProductSubmitButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import CreateProductSubmitButton from '@/components/admin-layout/product/create-product/CreateProductAddBlock.vue'
import CreateProductAmountInput from '@/components/admin-layout/product/create-product/CreateProductAmountInput.vue'
import CreateProductCategoryInput from '@/components/admin-layout/product/create-product/CreateProductCategoryInput.vue'
import CreateProductDescriptionInput from '@/components/admin-layout/product/create-product/CreateProductDescriptionInput.vue'
import CreateProductDiscountInput from '@/components/admin-layout/product/create-product/CreateProductDiscountInput.vue'
import CreateProductImagesInput from '@/components/admin-layout/product/create-product/CreateProductImagesInput/CreateProductImagesInput.vue'
import CreateProductNameInput from '@/components/admin-layout/product/create-product/CreateProductNameInput.vue'
import CreateProductPriceInput from '@/components/admin-layout/product/create-product/CreateProductPriceInput.vue'
import CreateProductShowInput from '@/components/admin-layout/product/create-product/CreateProductShowInput.vue'

export default defineComponent({
  name: 'create-product',
  components: {
    CreateProductDescriptionInput,
    CreateProductNameInput,
    CreateProductSubmitButton,
    CreateProductImagesInput,
    CreateProductPriceInput,
    CreateProductCategoryInput,
    CreateProductShowInput,
    CreateProductAmountInput,
    CreateProductDiscountInput,
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
