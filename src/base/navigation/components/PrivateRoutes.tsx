import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import {
  routeComponentEdit,
  routeComponents,
  routeComponentsView,
  routeHome,
  routeProducts,
  routeProductsEdit,
  routeProductsView,
} from '../routes';
import { MainContainer } from '../../../modules/main/containers';
import {
  AllProductsContainer,
  EditProductContainer,
  ViewProductContainer,
} from '../../../modules/products';
import { AlLComponentsContainer } from '../../../modules/components';
import { ViewComponentContainer } from '../../../modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from '../../../modules/components/containers/EditComponentContainer';
import { useKeycloak } from '@react-keycloak/web';

export const PrivateRoutes: FC = () => {
  const { keycloak, initialized } = useKeycloak();
  console.log(keycloak, initialized);

  useEffect(() => {
    if (initialized) {
      if (!keycloak.authenticated) {
        keycloak.login();
      }
    }
  }, [initialized, keycloak]);

  if (!initialized) {
    return <p>Loading...</p>;
  }

  if (!keycloak.authenticated) {
    return <p>Authenticating...</p>;
  }
  return (
    // <>main page</>
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
  );
};
