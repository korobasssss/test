import { componentsStore } from '../store';
import { IComponentEdit, IComponentView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const updateComponentAction = async ({
  productId,
  data,
}: {
  productId: number | string;
  data: IComponentEdit;
}): Promise<void> => {
  try {
    const res = await createRequest<IComponentView>({
      url: `/api/products-data/components/${productId}`,
      method: 'PATCH',
      data,
    });
    componentsStore.setViewComponent(res.data);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
