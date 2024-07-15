import { EDeviceStatus, IDataView } from 'src/modules/components';
import { dataStore } from 'src/modules/components/store';

const data: IDataView[] = [
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

const getDataFromServer = async () : Promise<any> => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

export const getAllGhostsAction = async (): Promise<void> => {
  dataStore.setLoading();
  try {
    const res = await getDataFromServer()
    dataStore.setData(res)
    dataStore.setReady();
  }
  catch (error) {
    console.log(error);
    dataStore.setError(error);
  }
}