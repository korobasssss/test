import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { routeComponentEdit, routeComponentsView, routeHome, routeMain, routeCreate } from '../routes';
import { ViewComponentContainer } from 'src/modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from 'src/modules/components/containers/EditComponentContainer';
import { WelcomePage, MainPage, CreateOmniGhostPage } from 'src/pages';

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
