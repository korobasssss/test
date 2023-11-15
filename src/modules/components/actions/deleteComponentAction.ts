import { productStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IProductView } from '../types';

export const deleteComponentAction = async ({
  productId,
}: {
  productId: number | string;
}): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  // productStore.setLoading();
  try {
    await axiosInstance<IProductView>({
      url: `/api/owners/components/${productId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data)
    // productStore.setFinished(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
