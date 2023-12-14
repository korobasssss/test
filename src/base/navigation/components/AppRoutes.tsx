import React, { FC } from 'react';
import { Route, Routes } from 'react-router';

import {
  routeComponentEdit,
  routeComponents,
  routeComponentsView,
  routeHome,
  routeProducts,
  routeProductsEdit,
  routeProductsView,
  routeProfile,
  routeWelcome,
} from '../routes';
import { MainContainer } from 'src/modules/main/containers';
import {
  AllProductsContainer,
  EditProductContainer,
  ViewProductContainer,
} from 'src/modules/products';
import { AlLComponentsContainer } from 'src/modules/components';
import { ViewComponentContainer } from 'src/modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from 'src/modules/components/containers/EditComponentContainer';
import { ProfilePage } from '../../../pages/Profile/Profile';
import { WelcomePage } from 'src/pages/Welcome';
import { Navigate } from 'react-router-dom';

export const AppRoutes: FC = () => {
  return (
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
      <Route path={routeWelcome.fullPath} element={<WelcomePage />} />
      <Route path={routeProfile.fullPath} element={<ProfilePage />} />
      <Route path="*" element={<Navigate to={routeWelcome.url} />} />
    </Routes>
  );
};
