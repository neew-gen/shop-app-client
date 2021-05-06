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

    const productDiscountExist: WritableComputedRef<boolean> = computed({
      get() {
        return Boolean(store.getters.getProductDiscount)
      },
      set(newValue): void {
        if (newValue) {
          store.dispatch('updateProductDiscount', {
            percentage: 0,
            endsAt: false,
          })
        }
        if (!newValue) {
          store.dispatch('updateProductDiscount', false)
        }
      },
    })

    const productDiscountpercentage: WritableComputedRef<
      string | undefined
    > = computed({
      get() {
        if (store.getters.getProductDiscount.percentage)
          return store.getters.getProductDiscount.percentage.toString()
        else return undefined
      },
      set(newValue): void {
        store.dispatch('updateProductDiscount', {
          percentage: Number(newValue),
        })
      },
    })

    const productDiscountEndsAt: WritableComputedRef<Date | false> = computed({
      get() {
        if (store.getters.getProductDiscount.endsAt)
          return store.getters.getProductDiscount.endsAt
        else return false
      },
      set(newValue): void {
        store.dispatch('updateProductDiscount', {
          endsAt: newValue,
        })
      },
    })
    const changeEndsAtExist = (): void => {
      const existStatus = Boolean(productDiscountEndsAt.value)
      if (existStatus) {
        store.dispatch('updateProductDiscount', {
          endsAt: false,
        })
      }
      if (!existStatus) {
        store.dispatch('updateProductDiscount', {
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
