import React, { ReactElement, useLayoutEffect } from 'react';
import { AllProductsContainer } from '../../modules/products';
import { Route, Routes } from 'react-router-dom';
import { ViewProductContainer } from '../../modules/products/containers';
import { EditProductContainer } from '../../modules/products/containers/EditProductContainer';
import { authAction } from '../../modules/auth';
import { routeHome } from '../../base/routes/home/routeHome';
import { routeProductsEdit } from '../../base/routes/products/edit/routeProductsEdit';
import { routeProductsView } from '../../base/routes/products/view/routeProductsView';

export const MainPage = (): ReactElement => {
  useLayoutEffect(() => {
    authAction();
  }, []);
  return (
    <>
      <Routes>
        <Route path={routeHome.path}>
          <Route index element={<AllProductsContainer />} />
          <Route
            path={routeProductsView.path}
            element={<ViewProductContainer />}
          />
          <Route
            path={routeProductsEdit.path}
            element={<EditProductContainer />}
          />
        </Route>
      </Routes>
    </>
  );
};
