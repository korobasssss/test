import { productStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IProductView } from '../types';

export const getAllProductsAction = async (): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  productStore.setLoading();
  try {
    const res = await axiosInstance<IProductView[]>({
      url: `/api/owners/products/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data)
    productStore.setFinished(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
  //@ts-ignore
  // productStore.setFinished(mockData);
};
