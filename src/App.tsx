import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InnerFullHeightLayout } from './base/components/InnerHeightLayout';
import { AppRoutes } from 'src/base/navigation';
import { AuthPopup } from 'src/modules/auth/components/authPopup/AuthPopup';
import './styles/variables/index.scss'
import './App.css'
// import keycloak from './base/api/keycloak';
// import { ReactKeycloakProvider } from '@react-keycloak/web';

export default function App(): ReactElement {
  return (
    <InnerFullHeightLayout>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <AuthPopup />
    </InnerFullHeightLayout>
  );
}
