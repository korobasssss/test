import React, { FC } from 'react';
import { MainLayout } from 'src/base/components';
import { WelcomeComponent } from 'src/modules/components/components/WelcomeComponent';

export const WelcomePage: FC = () => {
  return (
    <MainLayout
      topTitle="Welcome Page"
      withBottomNavigation={false}
    >
      <WelcomeComponent />
    </MainLayout>
  );
};
