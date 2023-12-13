import { productStore } from '../store';
import { IProductView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const getProductAction = async ({
  productId,
}: {
  productId: number | string;
}): Promise<void> => {
  productStore.setLoading();
  try {
    const res = await createRequest<IProductView>({
      url: `/api/products-data/${productId}`,
      method: 'GET',
    });
    productStore.setViewProduct(res.data);
    productStore.setReady();
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
