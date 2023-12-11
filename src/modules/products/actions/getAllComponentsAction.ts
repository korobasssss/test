import { productStore } from '../store';
import { IComponentView } from '../../components';
import { createRequest } from '../../../base/api/createRequest';

export const getAllComponentsAction = async (): Promise<void> => {
  try {
    const res = await createRequest<IComponentView[]>({
      url: `/api/products-data/components/`,
    });

    productStore.setComponentsData(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
