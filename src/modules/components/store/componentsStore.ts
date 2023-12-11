import { action, makeObservable, observable, override } from 'mobx';

import { BaseApiStoreClass } from 'src/base/classes';
import { IComponentEdit, IComponentView } from '../types';

class ComponentsStore extends BaseApiStoreClass<IComponentView[]> {
  public viewComponent: IComponentView | null = null;
  public editComponent: IComponentEdit | null = null;

  public constructor() {
    super();
    makeObservable(this, {
      data: override,
      viewComponent: observable,
      editComponent: observable,
      setViewComponent: action,
      setEditComponent: action,
      setViewComponentById: action,
    });
    // this.data = [];
  }

  public setViewComponent = (item: IComponentView | null): void => {
    this.viewComponent = item;
  };

  public setEditComponent = (item: IComponentEdit | null): void => {
    this.editComponent = item;
  };

  public setViewComponentById = (id?: string): void => {
    if (!id) {
      this.viewComponent = null;
    }
    this.viewComponent =
      this.data?.find((el) => el.id.toString() === id) ?? null;
  };
}

export const componentsStore = new ComponentsStore();
