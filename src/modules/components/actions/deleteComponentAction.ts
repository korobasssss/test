import { axiosInstance } from '../../../base/api';
import { IComponentView } from '../types';
import { componentsStore } from '../store';

export const deleteComponentAction = async ({
  productId,
}: {
  productId: number | string;
}): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  // productStore.setLoading();
  try {
    await axiosInstance<IComponentView>({
      url: `/api/owners/components/${productId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data)
    // productStore.setFinished(res.data);
    componentsStore.setViewComponent(null);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
