<template>
  <MDBCol col="12" class="d-flex flex-column">
    <div class="d-flex justify-content-between align-items-center">
      <div>Enable the discount:</div>
      <MDBSwitch v-model="productDiscountExist" />
    </div>
    <div v-if="productDiscountExist" class="d-flex flex-column my-2">
      <MDBInput
        label="Discount, %"
        type="number"
        v-model="productDiscountpercentage"
      />
      <div class="my-2">
        <MDBCheckbox
          label="Discount end date"
          :modelValue="Boolean(productDiscountEndsAt)"
          @change="changeEndsAtExist"
        />
      </div>
      <DatePicker
        v-if="productDiscountEndsAt"
        v-model="productDiscountEndsAt"
        mode="date"
      >
        <template v-slot="{ inputValue, inputEvents }">
          <MDBInput
            label="Discount end date"
            :modelValue="inputValue"
            v-on="inputEvents"
          />
        </template>
      </DatePicker>
    </div>
  </MDBCol>
</template>

<script lang="ts">
import { MDBCheckbox, MDBCol, MDBInput, MDBSwitch } from 'mdb-vue-ui-kit'
import { DatePicker } from 'v-calendar'
import {
  computed,
  ComputedRef,
  defineComponent,
  WritableComputedRef,
} from 'vue'

import { useStore } from '@/store'

export default defineComponent({
  name: 'ProductDiscountInput',
  components: {
    MDBCol,
    MDBSwitch,
    DatePicker,
    MDBInput,
    MDBCheckbox,
  },
  setup() {
    const store = useStore()

    const productDiscountExist: WritableComputedRef<any> = computed({
      get() {
        if (store.getters.getCreateProductDiscount === null) return null
        return Boolean(store.getters.getCreateProductDiscount)
      },
      set(newValue): void {
        if (newValue) {
          store.dispatch('updateCreateProductDiscount', {
            percentage: 0,
            endsAt: null,
          })
        }
        if (!newValue) {
          store.dispatch('updateCreateProductDiscount', null)
        }
      },
    })

    const productDiscountpercentage: WritableComputedRef<
      string | undefined
    > = computed({
      get() {
        if (store.getters.getCreateProductDiscount.percentage)
          return store.getters.getCreateProductDiscount.percentage.toString()
        else return undefined
      },
      set(newValue): void {
        store.dispatch('updateCreateProductDiscount', {
          percentage: Number(newValue),
        })
      },
    })

    const productDiscountEndsAt: WritableComputedRef<null | Date> = computed({
      get() {
        if (store.getters.getCreateProductDiscount.endsAt)
          return store.getters.getCreateProductDiscount.endsAt
        else return null
      },
      set(newValue): void {
        store.dispatch('updateCreateProductDiscount', {
          endsAt: newValue,
        })
      },
    })
    const changeEndsAtExist = (): void => {
      const existStatus = Boolean(productDiscountEndsAt.value)
      if (existStatus) {
        store.dispatch('updateCreateProductDiscount', {
          endsAt: null,
        })
      }
      if (!existStatus) {
        store.dispatch('updateCreateProductDiscount', {
          endsAt: new Date(),
        })
      }
    }
    return {
      productDiscountExist,
      productDiscountpercentage,
      productDiscountEndsAt,
      changeEndsAtExist,
    }
  },
})
</script>

<style scoped lang="scss"></style>
