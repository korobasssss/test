import { componentsStore } from '../store';
import { IComponentView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const getAllComponentsAction = async (): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  componentsStore.setLoading();
  try {
    const res = await createRequest<IComponentView[]>({
      url: `/api/products-data/components/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    componentsStore.setFinished(res.data);
    // componentsStore.setFinished(mockData);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
  //@ts-ignore
  // productStore.setFinished(mockData);
};
