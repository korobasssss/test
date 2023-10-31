import {action, makeObservable, override} from 'mobx';

import {BaseApiStoreClass} from 'src/base/classes';
import {IProduct} from "../types";

class ProductStore extends BaseApiStoreClass<IProduct[]> {
  public viewProduct: IProduct | null = null;
  public editProduct: IProduct | null = null;

  public constructor() {
    super();
    makeObservable(this, {
      data: override,
      setViewProduct: action,
      setEditProduct: action,
      setViewProductById: action,
    });
    // this.data = [];
  }

  public setViewProduct = (
    item: IProduct | null,
  ): void => {
    this.viewProduct = item;
  };

  public setEditProduct = (
    item: IProduct | null,
  ): void => {
    this.editProduct = item;
  };

  public setViewProductById = (
    id?: string,
  ): void => {
    if (!id) {
      this.viewProduct = null
    }
    this.viewProduct = this.data?.find((el) => el.id === id) ?? null
  };
}

export const productStore = new ProductStore();
