/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// TODO need to type
export function dataExtractor<Data>(data: any): Data {
  // if (data) {
  //   switch (key) {
  //     case 'categoriesList': {
  //       return data.data.categoriesPublic
  //     }
  //     case 'homeSwiper': {
  //       return data.data.swipes
  //     }
  //   }
  // }
  const toValues: Data[] = Object.values(data.data)
  return toValues[0]
}
