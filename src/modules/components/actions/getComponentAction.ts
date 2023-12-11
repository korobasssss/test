import { componentsStore } from '../store';
import { IComponentView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const getComponentAction = async ({
  componentId,
}: {
  componentId: number | string;
}): Promise<void> => {
  componentsStore.setLoading();
  try {
    const res = await createRequest<IComponentView>({
      url: `/api/products-data/components/${componentId}`,
      method: 'GET',
    });
    componentsStore.setViewComponent(res.data);
    componentsStore.setReady();
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
