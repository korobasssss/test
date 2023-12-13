import { componentsStore } from '../store';
import { IComponentEdit, IComponentView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const createComponentAction = async (
  data: IComponentEdit,
): Promise<void> => {
  try {
    await createRequest<IComponentView>({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      url: `/api/products-data/components/`,
      data,
    });

    componentsStore.setViewComponent(null);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
