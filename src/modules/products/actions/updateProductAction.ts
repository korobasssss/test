import { productStore } from '../store';
import { IProductEdit, IProductView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const updateProductAction = async ({
  productId,
  data,
}: {
  productId: number | string;
  data: IProductEdit;
}): Promise<void> => {
  try {
    const res = await createRequest<IProductView>({
      url: `/api/products-data/products/${productId}`,
      method: 'PATCH',
      data,
    });
    productStore.setViewProduct(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
