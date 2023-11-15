import { productStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IProductEdit, IProductView } from '../types';

export const updateProductAction = async ({
  productId,
  data,
}: {
  productId: number | string;
  data: IProductEdit;
}): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');

  try {
    const res = await axiosInstance<IProductView>({
      url: `/api/owners/products/${productId}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    productStore.setViewProduct(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
