import { productStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IProductView } from '../types';

export const getProductAction = async ({
  productId,
}: {
  productId: number | string;
}): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  productStore.setLoading();
  try {
    const res = await axiosInstance<IProductView>({
      url: `/api/products-data/${productId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    productStore.setViewProduct(res.data);
    productStore.setReady();
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
