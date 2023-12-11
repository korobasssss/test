import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { InnerFullHeightLayout } from './base/components/InnerHeightLayout';
// import keycloak from './base/api/keycloak';
// import { ReactKeycloakProvider } from '@react-keycloak/web';

export default function App(): ReactElement {
  // const eventLogger = useCallback((event: unknown, error: unknown): void => {
  //   console.log('onKeycloakEvent', event, error);
  // }, []);
  //
  // const tokenLogger = useCallback((tokens: unknown): void => {
  //   console.log('onKeycloakTokens', tokens);
  // }, []);
  // //
  // console.log('keycloak', keycloak);

  return (
    <InnerFullHeightLayout>
      {/*<ReactKeycloakProvider*/}
      {/*  authClient={keycloak}*/}
      {/*  onEvent={eventLogger}*/}
      {/*  onTokens={tokenLogger}*/}
      {/*  initOptions={{*/}
      {/*    checkLoginIframe: false,*/}
      {/*    flow: 'standard',*/}
      {/*  }}*/}
      {/*>*/}
      <BrowserRouter /*basename={window._env_.REACT_APP_PUBLIC_URL}*/>
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      {/*</ReactKeycloakProvider>*/}
    </InnerFullHeightLayout>
  );
}
