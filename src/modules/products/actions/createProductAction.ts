import { productStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IProductEdit, IProductView } from '../types';

export const createProductAction = async (
  data: IProductEdit,
): Promise<void> => {
  console.log('createProductsAction');
  const token = localStorage.getItem('ACCESS_TOKEN');

  // productStore.setLoading();
  try {
    console.log(data);
    const res = await axiosInstance<IProductView>({
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      url: `/api/owners/products/`,
      data,
    });
    console.log(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
