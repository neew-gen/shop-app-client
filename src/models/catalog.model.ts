import { Model } from '@vuex-orm/core'

export default class ProductModel extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'product'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields(): any {
    return {
      id: this.string(''),
      name: this.string(''),
      img: this.string(''),
      price: this.number(null),
      description: this.string(''),
      category: this.string('')
    }
  }
}
