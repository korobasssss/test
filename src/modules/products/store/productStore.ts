import { action, makeObservable, observable, override } from 'mobx';

import { BaseApiStoreClass } from 'src/base/classes';
import { IProductEdit, IProductView } from '../types';
import { IComponentView } from '../../components';

class ProductStore extends BaseApiStoreClass<IProductView[]> {
  public viewProduct: IProductView | null = null;
  public editProduct: IProductEdit | null = null;
  public componentsData: IComponentView[] | null = null;

  public constructor() {
    super();
    makeObservable(this, {
      data: override,
      componentsData: observable,
      editProduct: observable,
      viewProduct: observable,
      setViewProduct: action,
      setEditProduct: action,
      setViewProductById: action,
      setComponentsData: action,
    });
    // this.data = [];
  }

  public setViewProduct = (item: IProductView | null): void => {
    this.viewProduct = item;
  };

  public setEditProduct = (item: IProductEdit | null): void => {
    this.editProduct = item;
  };

  public setComponentsData = (item: IComponentView[] | null): void => {
    this.componentsData = item;
  };

  public setViewProductById = (id?: string): void => {
    if (!id) {
      this.viewProduct = null;
    }
    this.viewProduct =
      this.data?.find((el) => el.id!.toString() === id) ?? null;
  };
}

export const productStore = new ProductStore();
