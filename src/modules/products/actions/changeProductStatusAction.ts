import { productStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IProductView } from '../types';
import { EProductStatus } from '../constants';

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
      const res = await axiosInstance<IProductView>({
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        url: `/api/owners/products/${productId}/${requestUrlStatus}`,
        // data,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e);
      productStore.setError(e);
    }
  }
};
