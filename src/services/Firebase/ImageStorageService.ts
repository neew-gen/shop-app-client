import axios from 'axios'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

import { storage } from '@/services/Firebase/FirebaseInit'
import { ProductImagesItem } from '@/types/product'

export async function uploadProductImage(
  image: string,
): Promise<ProductImagesItem> {
  const response = await axios.get(image, {
    responseType: 'arraybuffer',
  })
  const buffer = Buffer.from(response.data, 'utf-8')
  const uuid = uuidv4()
  const fileName = 'product-images/' + uuid
  const metadata = {
    contentType: 'image/jpeg',
  }
  const storageRef = ref(storage, fileName)
  await uploadBytes(storageRef, buffer, metadata)
  const imgUrl = await getDownloadURL(ref(storage, fileName))
  return { id: uuid, imgUrl }
}

export async function deleteProductImages(ids: string[]): Promise<any[]> {
  const deletePromises = ids.map((id) => {
    const fileName = 'product-images/' + id
    const fileRef = ref(storage, fileName)
    return deleteObject(fileRef)
  })
  return Promise.all(deletePromises)
}
