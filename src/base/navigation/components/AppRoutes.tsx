import React, { FC } from 'react';
import { Route, Routes } from 'react-router';

import { routeComponentEdit, routeComponentsView, routeHome } from '../routes';

import { ViewComponentContainer } from 'src/modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from 'src/modules/components/containers/EditComponentContainer';
import { WelcomePage } from 'src/pages/WelcomePage';
import { MainPage } from 'src/pages/MainPage';
import { CreateOmniGhostPage } from 'src/pages/CreateOmniGhostPage';


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
      <Route path='/main' element={<MainPage />} />
      <Route path='/create' element={<CreateOmniGhostPage />} />
    </Routes>
  );
};
