import React, { ReactElement } from 'react';
import { AuthPopup } from 'src/modules/auth/components/authPopup/AuthPopup';

export const PrivatePages = (): ReactElement => {
  console.log('PrivatePages');
  return (
    <>
      PrivatePages
      <AuthPopup />
    </>
  );
};
