import React, { FC } from 'react';
import { Route, Routes } from 'react-router';

import { routeComponentEdit, routeComponentsView, routeHome } from '../routes';

import { ViewComponentContainer } from 'src/modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from 'src/modules/components/containers/EditComponentContainer';
import { WelcomePage } from 'src/pages/Welcome/WelcomePage';
import { MainPage } from 'src/pages/main_page';
import { CreateOmniGhostPage } from 'src/pages/create_omni_ghost';


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
