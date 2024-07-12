import React, { FC } from 'react';
import { Route, Routes } from 'react-router';

import { routeComponentEdit, routeComponentsView, routeHome } from '../routes';

import { ViewComponentContainer } from 'src/modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from 'src/modules/components/containers/EditComponentContainer';
import { WelcomePage } from 'src/pages/WelcomePage';
import { MainPage } from 'src/pages/MainPage';
import { CreateOmniGhostPage } from 'src/pages/CreateOmniGhostPage';
import { routeMain } from 'src/base/navigation/routes/main';
import { routeCreate } from 'src/base/navigation/routes/create';


export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path={routeComponentsView.fullPath}
        element={<ViewComponentContainer />}
      />
      <Route
        path={routeComponentEdit.fullPath}
        element={<EditComponentContainer />}
      />
      <Route path={routeHome.fullPath} element={<WelcomePage />} />
      <Route path={routeMain.fullPath} element={<MainPage />} />
      <Route path={routeCreate.fullPath} element={<CreateOmniGhostPage />} />
    </Routes>
  );
};
