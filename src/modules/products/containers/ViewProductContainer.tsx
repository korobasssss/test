import React, { FC, SyntheticEvent, useCallback, useEffect } from 'react';
import { MainLayout } from '../../../base/components';
import { ViewProductCard } from '../components/ViewProductCard';
import { observer } from 'mobx-react';
import { productStore } from '../store';
import { useParams } from 'react-router-dom';
import { deleteProductAction } from '../actions';
import { useNavigateBack } from '../../../base';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { useNavigate } from 'react-router';
import { IProductView } from '../types';
import { getProductAction } from '../actions/getProductAction';
import { routeHome, routeProductsEdit } from '../../../base/navigation/routes';

export const ViewProductContainer: FC = observer(() => {
  const params = useParams();
  const { goBack } = useNavigateBack();

  const { viewProduct } = productStore;

  const navigate = useNavigate();

  const onChangeProductHandler = useCallback(
    (item: IProductView) => {
      return (e: SyntheticEvent) => {
        e.stopPropagation();
        navigate(routeProductsEdit.url({ id: item.id! }));
        productStore.setViewProduct(item);
      };
    },
    [navigate],
  );

  const onDeleteProductHandler = useCallback(() => {
    if (viewProduct?.id) {
      deleteProductAction({ productId: viewProduct?.id }).then(() => {
        navigate(routeHome.url);
      });
    }
  }, [navigate, viewProduct?.id]);

  useEffect(() => {
    if (!viewProduct) {
      getProductAction({ productId: params.id! });
      // .then(() => {
      // productStore.setViewProductById(params.id);
      // });
    }
  }, [params.id, viewProduct]);

  if (productStore.isLoading) return <>...Loading</>;

  return (
    <MainLayout
      topTitle="SelectedProductContainer"
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => goBack(),
      }}
    >
      <ViewProductCard
        product={viewProduct}
        onChangeProduct={onChangeProductHandler(viewProduct!)}
        onDeleteProduct={onDeleteProductHandler}
      />
    </MainLayout>
  );
});
