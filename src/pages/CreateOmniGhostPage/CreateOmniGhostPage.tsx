import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { MainLayout } from 'src/base/components';
import { CreateOmniGhostComponent } from 'src/components/CreateOmniGhostComponent';
import { routeMain } from 'src/base/navigation/routes/main';

export const CreateOmniGhostPage: FC = () => {
  const navigation = useNavigate();

  const handleClickCreate = useCallback(() => {
    navigation(routeMain.fullPath);
  }, [navigation]);

  return <MainLayout
    topTitle="Новый OmniGhost"
    leftTopIcon={{
      svg: <BackLogo />,
      clicked: () => handleClickCreate(),
    }}
    withBottomNavigation={false}
  >
    <CreateOmniGhostComponent />
  </MainLayout>;
};