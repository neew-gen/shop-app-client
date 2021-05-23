import { isEqual, sumBy } from 'lodash'
import { computed, ComputedRef, Ref, ref } from 'vue'

import { awaitFetcher } from '@/api/fetch'
import { graphqlFetchBy } from '@/api/graphql-api/GraphqlApi'
import { GET_PRODUCTS_CART_LIST } from '@/api/graphql-api/queries/productQueries'
import { ProductCartItem } from '@/types/product'

class CartApi {
  private cartData: Ref<ProductCartItem[] | null> = ref([])

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
    this.getCartData()
    return computed(() => {
      if (!this.cartData.value) return false
      return !(this.cartData.value.length > 0)
    })
  }

  public getIsHaveCheckedInCart(): ComputedRef<boolean> {
    return computed(() => {
      if (!this.cartData.value) return false
      return this.cartData.value.some((cartItem) => cartItem.checked)
    })
  }

  public getIsAllChecked(): ComputedRef<boolean> {
    return computed(() => {
      if (!this.cartData.value) return false
      if (!this.cartData.value.length) return false
      return !this.cartData.value.some((cartItem) => !cartItem.checked)
    })
  }

  public getProductIsInCart(_id: string): ComputedRef<boolean> {
    return computed(() => {
      if (!this.cartData.value) return false
      return this.cartData.value.some((cartItem) => cartItem._id === _id)
    })
  }

  public getTotalPrice(): ComputedRef<number> {
    return computed(() => {
      if (!this.cartData.value) return 0
      return sumBy(this.cartData.value, (cartItem) => {
        if (!cartItem.checked) return 0
        const { discount, price } = cartItem.productData
        if (!discount) return price * cartItem.amount
        const discountValue = (price / 100) * discount.percentage
        return (price - discountValue) * cartItem.amount
      })
    })
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

  public deleteSelectedCartItems(): void {
    const cartDataJson = localStorage.getItem('cart')
    if (!cartDataJson) return
    const cartDataForDelete = JSON.parse(cartDataJson)
    const cartDataAfterDelete = cartDataForDelete.filter(
      (cartItem: ProductCartItem) => !cartItem.checked,
    )
    this.refreshCart(cartDataAfterDelete)
    localStorage.setItem('cart', JSON.stringify(cartDataAfterDelete))
  }

  public setAllChecked(): void {
    const currentCheckedStatus = this.getIsAllChecked().value
    const cartDataJson = localStorage.getItem('cart')
    if (!cartDataJson) return
    const cartDataForMutation: ProductCartItem[] = JSON.parse(cartDataJson)
    for (const item of cartDataForMutation) {
      item.checked = !currentCheckedStatus
    }
    this.refreshCart(cartDataForMutation)
    localStorage.setItem('cart', JSON.stringify(cartDataForMutation))
  }
  public async updateCartProductsData(): Promise<void> {
    // const currentData = this.getCartData().value
    // if (!currentData) return
    // const cartProductsIds = currentData.map((cartItem) => cartItem._id)
    // const fetchedData = await awaitFetcher('NF', 'cart-cache', () =>
    //   graphqlFetchBy(GET_PRODUCTS_CART_LIST, { ids: [...cartProductsIds] }),
    // )
    // for (const dataItem of currentData) {
    //   let isDataEqual = true
    //   for (const prop in dataItem) {
    //
    //   }
    // }
  }

  private refreshCart(newCartData: ProductCartItem[]): void {
    this.cartData.value = newCartData
  }
}

export default new CartApi()
