import { Model } from '@vuex-orm/core'

export default class CategoryModel extends Model {
  static entity = 'category'
  static fields(): any {
    return {
      id: this.string(''),
      name: this.string(''),
      imgUrl: this.string(''),
      isPublic: this.boolean(false)
    }
  }
}
