import { selectedDataStore } from '../store';
import {
  ECableHorseshoeStatusTranslate,
  ECableStatusTranslate,
  EDeviceStatus,
  IDataOneDeviceView,
} from 'src/modules/components';
// import { IComponentView } from '../types';
// import { createRequest } from '../../../base/api/createRequest';

// const mock = {
//   name: 'string',
//   number: 11,
//   description: 'string',
//   id: 123,
//   status: EComponentStatus.AVAILABLE,
// };

const mock : IDataOneDeviceView = {
  id: 123,
  coordinates: '55.761811, 37.610116',
  status: EDeviceStatus.ONLINE,
  speed: 80,
  devicePercent: 60,
  cableStatus: ECableStatusTranslate.BUCKLED,
  horseshoe_cable: ECableHorseshoeStatusTranslate.OPEN
};

const getDataFromServer = async (ghostId: number | undefined ): Promise<any> => {
  return new Promise((resolve) => {
    mock.id = ghostId as number
    setTimeout(() => resolve(mock), 200);
  });
};

export const getGhostByIdAction = async ({
  ghostId,
}: {
  ghostId?: number | string;
}): Promise<void> => {
  selectedDataStore.setLoading();
  try {
    // const res = await createRequest<IComponentView>({
    //   url: `/api/products-data/components/${componentId}`,
    //   method: 'GET',
    // });

    const res = await getDataFromServer(Number.parseInt(ghostId as string, 10));
    console.log(ghostId, mock);

    selectedDataStore.setData(res);
    selectedDataStore.setReady();
  } catch (e) {
    console.log(e);
    selectedDataStore.setError(e);
  }
};
