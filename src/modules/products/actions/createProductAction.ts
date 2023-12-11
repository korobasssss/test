import { productStore } from '../store';
import { IProductEdit, IProductView } from '../types';
import { createRequest } from '../../../base/api/createRequest';

export const createProductAction = async (
  data: IProductEdit,
): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');

  try {
    const res = await createRequest<IProductView>({
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      url: `/api/products-data/products/`,
      data,
    });
    console.log(res.data);
  } catch (e) {
    console.log(e);
    productStore.setError(e);
  }
};
