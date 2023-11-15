import React, { FC, useCallback, useEffect } from 'react';
import { getAllProductsAction } from '../actions';
import { ProductsList } from '../components/ProductsList';
import { CreateButton } from '../../../base/components/CreateProductButton';
// import { MainLayout } from '../../../base/components';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react';
import { authStore } from '../../auth/stores';
import { routeProductsEdit } from '../../../base/routes/products/edit/routeProductsEdit';

export const AllProductsContainer: FC = observer(() => {
  const navigate = useNavigate();

  const isAuth = authStore.isAuth;

  useEffect(() => {
    if (isAuth) {
      getAllProductsAction();
    }
  }, [isAuth]);

  const createProductHandler = useCallback(() => {
    navigate(routeProductsEdit.url({ id: 'new' }));
  }, [navigate]);

  return (
    <>
      <ProductsList />
      <CreateButton
        onChange={createProductHandler}
        title="Создать новый продукт"
      />
    </>
  );
});
