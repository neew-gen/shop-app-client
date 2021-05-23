<template>
  <div
    v-if="!discountPercentage"
    class="price"
    :style="`font-size: ${discountFontSize};`"
  >
    {{ price.toFixed(2) }}&ensp;dol.
  </div>
  <div v-if="discountPercentage" class="price sale">
    <div class="sale__old-price" :style="`font-size: ${priceFontSize};`">
      {{ price.toFixed(2) }}
    </div>
    <div class="sale__new-price" :style="`font-size: ${discountFontSize};`">
      {{ discountPrice }}&ensp;dol.
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductPrice',
  props: {
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
    },
    priceFontSize: {
      type: String,
      required: true,
    },
    discountFontSize: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const discountPrice: ComputedRef<string | undefined> = computed(() => {
      const { price, discountPercentage } = props
      if (!discountPercentage) return
      const discountValue = (price / 100) * discountPercentage
      return (price - discountValue).toFixed(2)
    })
    return { discountPrice }
  },
})
</script>

<style scoped lang="scss">
.price {
  font-weight: 600;
}

.sale {
  display: flex;
  align-items: center;
  &__old-price {
    color: #4f4f4f;
    font-weight: 400;
    text-decoration: line-through;
  }
  &__new-price {
    padding-left: 2px;
  }
}
</style>
