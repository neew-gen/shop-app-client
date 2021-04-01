export interface BreadcrumbsItem {
  items: Array<{ name: string; path: string }>
  active: string
}

export interface BreadcrumbsData {
  [key: string]: BreadcrumbsItem
}
// interface IObjectKeys {
//   [key: string]: Array<{ name: string; path: string }> | string
// }
