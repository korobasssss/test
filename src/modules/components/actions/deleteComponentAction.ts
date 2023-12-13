import { IComponentView } from '../types';
import { componentsStore } from '../store';
import { createRequest } from '../../../base/api/createRequest';

export const deleteComponentAction = async ({
  productId,
}: {
  productId: number | string;
}): Promise<void> => {
  try {
    await createRequest<IComponentView>({
      url: `/api/products-data/components/${productId}`,
      method: 'DELETE',
    });
    componentsStore.setViewComponent(null);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
