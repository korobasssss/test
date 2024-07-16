import { action, makeObservable, override } from 'mobx';
import { IDataView } from 'src/modules/components/types/IData';
import { BaseApiStoreClass } from 'src/base/classes';

class DataStore extends BaseApiStoreClass<IDataView[]>{

  public constructor() {
    super()
    makeObservable(this, {
      data: override,
      setData: action
    });
  }

  public setData = (item: IDataView[] | null): void => {
    this.data = item
  }
}

export const dataStore = new DataStore();
