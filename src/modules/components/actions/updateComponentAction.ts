import { componentsStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IComponentEdit, IComponentView } from '../types';

export const updateComponentAction = async ({
  productId,
  data,
}: {
  productId: number | string;
  data: IComponentEdit;
}): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');

  try {
    const res = await axiosInstance<IComponentView>({
      url: `/api/owners/components/${productId}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    componentsStore.setViewComponent(res.data);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
