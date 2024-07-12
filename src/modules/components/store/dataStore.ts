import { makeObservable, observable } from 'mobx';
import { EDataStatus } from 'src/modules/components/constants/EDataStatus';
import { IDataView } from 'src/modules/components/types/IData';

class DataStore {

  public data: IDataView[] = [
    {
      id: 32547,
      status: EDataStatus.ONLINE,
    },
    {
      id: 32599,
      status: EDataStatus.OFFLINE,
    },
    {
      id: 32635,
      status: EDataStatus.OFFLINE,
    },
    {
      id: 48741,
      status: EDataStatus.ONLINE,
    },
    {
      id: 55478,
      status: EDataStatus.ONLINE,
    },
  ];

  public constructor() {
    makeObservable(this, {
      data: observable
    });
  }
}

export const dataStore = new DataStore();
