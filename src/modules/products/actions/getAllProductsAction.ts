import { productStore } from '../store';
// import { axiosInstance } from '../../../base/api';
import { IProductView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const getAllProductsAction = async (): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  productStore.setLoading();
  try {
    const res = await createRequest<IProductView[]>({
      url: `/api/products-data/products/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    productStore.setFinished(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
  //@ts-ignore
  // productStore.setFinished(mockData);
};
