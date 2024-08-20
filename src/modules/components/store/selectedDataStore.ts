import { BaseApiStoreClass } from 'src/base/classes';
import { IDataOneDeviceView } from 'src/modules/components';
import { action, makeObservable, override } from 'mobx';

class SelectedDataStore extends BaseApiStoreClass<IDataOneDeviceView>{

  public constructor() {
    super()
    makeObservable(this, {
      data: override,
      setData: action
    });
  }

  public setData = (item: IDataOneDeviceView | null): void => {
    this.data = item
  }
}

export const selectedDataStore = new SelectedDataStore();