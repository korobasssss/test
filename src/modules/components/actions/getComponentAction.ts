import { componentsStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IComponentView } from '../types';

export const getComponentAction = async ({
  componentId,
}: {
  componentId: number | string;
}): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  componentsStore.setLoading();
  try {
    const res = await axiosInstance<IComponentView>({
      url: `/api/owners/components/${componentId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    componentsStore.setViewComponent(res.data);
    componentsStore.setReady();
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
