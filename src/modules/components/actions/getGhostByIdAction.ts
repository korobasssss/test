import { componentsStore } from '../store';
import { EComponentStatus, IComponentView } from 'src/modules/components';
// import { IComponentView } from '../types';
// import { createRequest } from '../../../base/api/createRequest';

const getDataFromServer = async (mockData: IComponentView): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 1000);
  });
};

const mock = {
  name: 'string',
  number: 11,
  description: 'string',
  id: 123,
  status: EComponentStatus.AVAILABLE,
};

export const getGhostByIdAction = async ({
  ghostId,
}: {
  ghostId?: number | string;
}): Promise<void> => {
  componentsStore.setLoading();
  try {
    // const res = await createRequest<IComponentView>({
    //   url: `/api/products-data/components/${componentId}`,
    //   method: 'GET',
    // });

    const res = await getDataFromServer(mock);
    console.log(ghostId, mock);

    componentsStore.setViewComponent(res.data);
    componentsStore.setReady();
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
