<template>
  <MDBCol col="12" class="d-flex flex-column">
    <div class="d-flex justify-content-between align-items-center">
      <div>Enable the discount:</div>
      <MDBSwitch v-model="productDiscountStatus" />
    </div>
    <div v-if="productDiscountStatus" class="d-flex flex-column my-2">
      <MDBInput
        label="Discount, %"
        type="number"
        v-model="productDiscountProcentage"
      />
      <div class="my-2">
        <MDBCheckbox
          label="Discount end date"
          :modelValue="Boolean(productDiscountEndsAt)"
          @change="enableDisableEndsAt"
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
import { computed, defineComponent, ref, WritableComputedRef } from 'vue'

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

    const productDiscountStatus: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return store.getters.getProductDiscount.status
      },
      set(newValue: boolean): void {
        store.dispatch('updateProductDiscount', { status: newValue })
      },
    })

    const productDiscountProcentage: WritableComputedRef<
      string | undefined
    > = computed({
      get() {
        if (store.getters.getProductDiscount.procentage)
          return store.getters.getProductDiscount.procentage.toString()
        else return undefined
      },
      set(newValue): void {
        store.dispatch('updateProductDiscount', {
          procentage: Number(newValue),
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
    const enableDisableEndsAt = (): void => {
      const check = Boolean(productDiscountEndsAt.value)
      if (check) {
        store.dispatch('updateProductDiscount', {
          endsAt: false,
        })
      }
      if (!check) {
        store.dispatch('updateProductDiscount', {
          endsAt: new Date(),
        })
      }
    }
    return {
      productDiscountStatus,
      productDiscountProcentage,
      productDiscountEndsAt,
      enableDisableEndsAt,
    }
  },
})
</script>

<style scoped lang="scss"></style>
