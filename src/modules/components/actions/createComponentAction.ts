import { componentsStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IComponentEdit, IComponentView } from '../types';

export const createComponentAction = async (
  data: IComponentEdit,
): Promise<void> => {
  console.log('createComponentsAction');
  const token = localStorage.getItem('ACCESS_TOKEN');

  // productStore.setLoading();
  try {
    console.log(data);
    const res = await axiosInstance<IComponentView>({
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      url: `/api/products-data/components/`,
      data,
    });
    console.log(res.data);
    componentsStore.setViewComponent(null);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
};
