import { ProductCartItem } from '@/types/product'

export async function cartItemToCache<Input>(
  key: string,
  input: Input,
): Promise<void> {
  const cacheOpened = await caches.open(key)
  const cacheMatched = await caches.match(key)
  if (cacheMatched) {
    const fromJson = await cacheMatched.json()
    fromJson.push(input)
    const toJson = JSON.stringify(fromJson)
    await cacheOpened.put(key, new Response(toJson))
    return
  }
  const toJson = JSON.stringify([input])
  await cacheOpened.put(key, new Response(toJson))
}

export async function updateCartItemCache(
  id: string,
  propName: string,
  propValue: string | number,
): Promise<void> {
  const cacheOpened = await caches.open('/cart-cache')
  const cacheMatched = await caches.match('/cart-cache')
  if (cacheMatched) {
    const fromJson = await cacheMatched.json()
    const itemForUpdate = fromJson.filter(
      (i: ProductCartItem) => i.id === id,
    )[0]
    itemForUpdate[propName] = propValue
    const toJson = JSON.stringify(fromJson)
    await cacheOpened.put('/cart-cache', new Response(toJson))
  }
}
export async function updateCacheAllChecked(value: boolean): Promise<void> {
  const cacheOpened = await caches.open('/cart-cache')
  const cacheMatched = await caches.match('/cart-cache')
  if (cacheMatched) {
    const fromJson = await cacheMatched.json()
    for (const item of fromJson) {
      item.checked = value
    }
    const toJson = JSON.stringify(fromJson)
    await cacheOpened.put('/cart-cache', new Response(toJson))
  }
}

export async function deleteCacheSelected(): Promise<void> {
  const cacheOpened = await caches.open('/cart-cache')
  const cacheMatched = await caches.match('/cart-cache')
  if (cacheMatched) {
    const fromJson = await cacheMatched.json()
    const updatedCache = fromJson.filter((i: ProductCartItem) => !i.checked)
    const toJson = JSON.stringify(updatedCache)
    await cacheOpened.put('/cart-cache', new Response(toJson))
  }
}
