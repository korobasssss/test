import React, { ReactElement, useLayoutEffect } from 'react';
import { AllProductsContainer } from '../../modules/products';
import { Route, Routes } from 'react-router-dom';
import {
  EditProductContainer,
  ViewProductContainer,
} from '../../modules/products/containers';
import { authAction } from '../../modules/auth';
import {
  routeComponents,
  routeComponentsView,
  routeHome,
  routeProducts,
  routeProductsEdit,
  routeProductsView,
} from '../../base/routes';
import { AlLComponentsContainer } from '../../modules/components/containers';
import { MainContainer } from '../../modules/main/containers';
import { ViewComponentContainer } from '../../modules/components/containers/ViewComponentContainer';

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
      </Routes>
    </>
  );
};
