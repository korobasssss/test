import React, { ReactElement, useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AllProductsContainer,
  EditProductContainer,
  ViewProductContainer,
} from '../../modules/products';
import { authAction } from '../../modules/auth';
import {
  routeComponents,
  routeComponentEdit,
  routeComponentsView,
  routeHome,
  routeProducts,
  routeProductsEdit,
  routeProductsView,
} from '../../base/routes';
import { AlLComponentsContainer } from '../../modules/components';
import { MainContainer } from '../../modules/main/containers';
import { ViewComponentContainer } from '../../modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from '../../modules/components/containers/EditComponentContainer';

export const MainPage = (): ReactElement => {
  useLayoutEffect(() => {
    authAction();
  }, []);

  console.log(routeProductsEdit.path);
  console.log(routeProductsView.fullPath);
  console.log(routeProductsView.url({ id: 1 }));
  return (
    <>
      <Routes>
        <Route path={routeHome.path} element={<MainContainer />}>
          <Route path={routeProducts.path} element={<AllProductsContainer />} />
          <Route
            path={routeComponents.path}
            element={<AlLComponentsContainer />}
          />
          <Route index element={<AllProductsContainer />} />
        </Route>
        <Route
          path={routeProductsView.fullPath}
          element={<ViewProductContainer />}
        />
        <Route
          path={routeProductsEdit.fullPath}
          element={<EditProductContainer />}
        />
        <Route
          path={routeComponentsView.fullPath}
          element={<ViewComponentContainer />}
        />
        <Route
          path={routeComponentEdit.fullPath}
          element={<EditComponentContainer />}
        />
      </Routes>
    </>
  );
};
