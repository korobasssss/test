import {makeObservable, override} from 'mobx';

import {BaseApiStoreClass} from 'src/base/classes';
import {IProduct} from "../types/IProduct";

class ProductStore extends BaseApiStoreClass<IProduct[]> {
  public constructor() {
    super();
    makeObservable(this, {
      data: override,
    });
    // this.data = [];
  }
}

export const productStore = new ProductStore();
