import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeMain } from 'src/base/navigation/routes/main';
import { MainLayout } from 'src/base/components';
import { CreateOmniGhostComponent } from 'src/modules/components/components';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { observer } from 'mobx-react';
import { ICreateOmniGhostAction } from 'src/modules/components/types';
import { createOmniGhostAction } from 'src/modules/components/actions';

export const CreateOmniGhostContainer: FC = observer(() => {
  const navigation = useNavigate();

  const handleClickCreate = useCallback(() => {
    navigation(routeMain.fullPath);
  }, [navigation]);

  const handlerCreate = useCallback((data: ICreateOmniGhostAction) => {
    createOmniGhostAction(
      data
    );
  }, []);

  return <MainLayout
    topTitle="Новый OmniGhost"
    leftTopIcon={{
      svg: <BackLogo />,
      clicked: () => handleClickCreate(),
    }}
    withBottomNavigation={false}
  >
    <CreateOmniGhostComponent
      handlerCreate={handlerCreate}
    />
  </MainLayout>;
});