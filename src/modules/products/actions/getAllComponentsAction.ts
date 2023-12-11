import { axiosInstance } from '../../../base/api';
import { productStore } from '../store';
import { IComponentView } from '../../components';

export const getAllComponentsAction = async (): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  // productStore.setLoading();
  try {
    const res = await axiosInstance<IComponentView[]>({
      url: `/api/products-data/components/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data);
    productStore.setComponentsData(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
