import { action, makeObservable, observable } from 'mobx';
import { EDeviceStatus } from 'src/modules/components/constants/EDataStatus';
import { IDataView } from 'src/modules/components/types/IData';

class DataStore {

  public constructor() {
    makeObservable(this, {
      data: observable,
      getData: action
    });
  }

  public data: IDataView[] = [];

  public getData = (): void => {
    this.data = [
      {
        id: 32547,
        status: EDeviceStatus.ONLINE,
      },
      {
        id: 32599,
        status: EDeviceStatus.OFFLINE,
      },
      {
        id: 32635,
        status: EDeviceStatus.OFFLINE,
      },
      {
        id: 48741,
        status: EDeviceStatus.ONLINE,
      },
      {
        id: 55478,
        status: EDeviceStatus.ONLINE,
      },
    ]
  }

  public createOmniGhostUi = (
    deviceId: string,
    status: string | undefined,
    speed: number,
    devicePercent: number,
    cableStatus: string | undefined): void => {
    console.log(deviceId, status, speed, devicePercent, cableStatus);
  }
}

export const dataStore = new DataStore();
