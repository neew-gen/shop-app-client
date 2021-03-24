import { Model } from '@vuex-orm/core'

export default class ProductModel extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'product'
  static fields(): any {
    return {
      id: this.string(''),
      name: this.string(''),
      img: this.string(''),
      price: this.string(''),
      description: this.string(''),
      category: this.string('')
    }
  }
}
