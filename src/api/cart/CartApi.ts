import { computed, ComputedRef, Ref, ref } from 'vue'

import { ProductCartItem } from '@/types/product'

class CartApi {
  cartData: Ref<ProductCartItem[] | null> = ref([])
  // isEmpty: Ref<boolean> = ref(true)
  isHaveChecked: Ref<boolean> = ref(false)
  isAllChecked: Ref<boolean> = ref(false)

  public getCartData(): Ref<ProductCartItem[] | null> {
    const cartDataJson = localStorage.getItem('cart')
    if (!cartDataJson) {
      this.cartData.value = null
      return this.cartData
    }
    this.cartData.value = JSON.parse(cartDataJson)
    return this.cartData
  }

  public getIsEmptyCart(): ComputedRef<boolean> {
    return computed(() => {
      if (!this.cartData.value) return false
      return !(this.cartData.value.length > 0)
    })
    // const currentCartData = this.getCartData()
    // if (!currentCartData.value) {
    //   this.isEmpty.value = true
    //   return this.isEmpty
    // }
    // this.isEmpty.value = !(currentCartData.value.length > 0)
    // return this.isEmpty
  }

  public getIsHaveCheckedInCart(): ComputedRef<boolean> {
    return computed(() => {
      if (!this.cartData.value) return false
      return this.cartData.value.some((cartItem) => cartItem.checked)
    })
    // if (!this.cartData.value) {
    //   this.isHaveChecked.value = false
    //   return this.isHaveChecked
    // }
    // this.isHaveChecked.value = this.cartData.value.some(
    //   (cartItem) => cartItem.checked,
    // )
    // return this.isHaveChecked
  }

  public getIsAllChecked(): ComputedRef<boolean> {
    return computed(() => {
      if (!this.cartData.value) return false
      if (!this.cartData.value.length) return false
      return !this.cartData.value.some((cartItem) => !cartItem.checked)
    })
    // if (!this.cartData.value) {
    //   this.isAllChecked.value = false
    //   return this.isAllChecked
    // }
    // this.isAllChecked.value = !this.cartData.value.some(
    //   (cartItem) => !cartItem.checked,
    // )
    // return this.isAllChecked
  }

  public addItemToCart(item: ProductCartItem): void {
    const cartDataJson = localStorage.getItem('cart')
    if (cartDataJson) {
      const cartDataForAdd = JSON.parse(cartDataJson)
      cartDataForAdd.push(item)
      this.refreshCart(cartDataForAdd)
      const cartDataToJson = JSON.stringify(cartDataForAdd)
      localStorage.setItem('cart', cartDataToJson)
      return
    }
    this.refreshCart([item])
    localStorage.setItem('cart', JSON.stringify([item]))
  }

  public updateCartItem(
    _id: string,
    updateData: { [key: string]: string | number | boolean },
  ): void {
    const cartDataJson = localStorage.getItem('cart')
    if (!cartDataJson) return
    const cartDataForUpdate = JSON.parse(cartDataJson)
    const cartItemForUpdate = cartDataForUpdate.filter(
      (cartItem: ProductCartItem) => cartItem._id === _id,
    )[0]
    for (const prop in updateData) {
      cartItemForUpdate[prop] = updateData[prop]
    }
    this.refreshCart(cartDataForUpdate)
    localStorage.setItem('cart', JSON.stringify(cartDataForUpdate))
  }

  deleteSelectedCartItems(): void {
    const cartDataJson = localStorage.getItem('cart')
    if (!cartDataJson) return
    const cartDataForDelete = JSON.parse(cartDataJson)
    const cartDataAfterDelete = cartDataForDelete.filter(
      (cartItem: ProductCartItem) => !cartItem.checked,
    )
    this.refreshCart(cartDataAfterDelete)
    localStorage.setItem('cart', JSON.stringify(cartDataAfterDelete))
  }

  private refreshCart(newCartData: ProductCartItem[]): void {
    this.cartData.value = newCartData
    // this.getIsAllChecked(newCartData)
  }
}

export default new CartApi()
