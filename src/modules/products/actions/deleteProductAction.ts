import { productStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IProductView } from '../types';

export const deleteProductAction = async ({
  productId,
}: {
  productId: number | string;
}): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');

  try {
    await axiosInstance<IProductView>({
      url: `/api/products-data/products/${productId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
