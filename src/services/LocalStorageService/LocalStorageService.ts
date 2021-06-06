import { MayHaveId } from '@/types/localStorageService'

export function getLocalItem<Data>(key: string): Data | null {
  const dataJson = localStorage.getItem(key)
  if (!dataJson) {
    return null
  }
  return JSON.parse(dataJson)
}

export function setLocalItem<Data>(key: string, updateData: Data): void {
  const dataToJson = JSON.stringify(updateData)
  localStorage.setItem(key, dataToJson)
}

export function pushToLocalArrayItem<Data>(
  key: string,
  updateData: Data,
): Data[] {
  const receivedItem: Data[] | null = getLocalItem(key)
  if (!receivedItem) {
    const newArray = [updateData]
    localStorage.setItem(key, JSON.stringify(newArray))
    return newArray
  }
  receivedItem.push(updateData)
  localStorage.setItem(key, JSON.stringify(receivedItem))
  return receivedItem
}

export function deleteFromLocalArrayItem<Data extends MayHaveId>(
  key: string,
  arrayItemId: string,
): Data[] | null {
  const received: Data[] | null = getLocalItem(key)
  if (!received) return null
  const updatedData = received.filter((item: Data) => {
    if (!item.id) throw 'no id field'
    return item.id !== arrayItemId
  })
  localStorage.setItem(key, JSON.stringify(updatedData))
  return updatedData
}

export function removeLocalItems(keys: string[]): void {
  for (const key of keys) {
    localStorage.removeItem(key)
  }
}
