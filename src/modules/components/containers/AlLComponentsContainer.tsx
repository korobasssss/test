import React, { FC, useCallback, useEffect } from 'react';
// import { getAllProductsAction } from '../actions';
// import { ProductsList } from '../components/ProductsList';
// import { CreateProductButton } from '../components/CreateProductButton';
// import { MainLayout } from '../../../base/components';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react';
// import {ProductsList} from "../../products/components/ProductsList";
import { CreateButton } from '../../../base/components/CreateProductButton';
import { routeProductsEdit } from '../../../base/routes';
import { getAllComponentsAction } from '../actions';
import { ComponentsList } from '../components/ComponentsList/ComponentsList';
// import { authStore } from '../../auth/stores';
// import { routeProductsEdit } from '../../../base/routes/products/edit/routeProductsEdit';

export const AlLComponentsContainer: FC = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    getAllComponentsAction();
  });
  //
  // const isAuth = authStore.isAuth;
  //
  // useEffect(() => {
  //   if (isAuth) {
  //     getAllProductsAction();
  //   }
  // }, [isAuth]);

  const createProductHandler = useCallback(() => {
    navigate(routeProductsEdit.url({ id: 'new' }));
  }, [navigate]);

  return (
    <>
      <ComponentsList />
      <CreateButton
        onChange={createProductHandler}
        title="Создать новый компонент"
      />
    </>
  );
});
