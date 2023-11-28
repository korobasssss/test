import React, { ReactElement } from 'react';
import { PrivateRoutes } from '../../base/navigation';
// import { AuthPopup } from '../../modules/auth/components/authPopup/AuthPopup';

export const MainPage = (): ReactElement => {
  return (
    <>
      <PrivateRoutes />
      {/*<AuthPopup />*/}
    </>
  );
};
