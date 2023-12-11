import { productStore } from '../store';
import { IProductView } from '../types';
import { EProductStatus } from '../constants';
import { createRequest } from '../../../base/api/createRequest';

export const changeProductStatusAction = async ({
  productId,
  status,
}: {
  productId?: string | number;
  status: keyof typeof EProductStatus;
}): Promise<void> => {
  if (status !== EProductStatus.DRAFT && productId) {
    const requestUrlStatus =
      status === EProductStatus.AVAILABLE ? 'toAvailable' : 'toArchived';

    try {
      const res = await createRequest<IProductView>({
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        url: `/api/products-data/products/${productId}/${requestUrlStatus}`,
        // data,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e);
      productStore.setError(e);
    }
  }
};
