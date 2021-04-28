// TODO type this
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function axiosExtractor<Data>(data: any): Data {
  return data.data
}
