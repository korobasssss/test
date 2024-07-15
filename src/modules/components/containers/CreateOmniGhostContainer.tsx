import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeMain } from 'src/base/navigation/routes/main';
import { MainLayout } from 'src/base/components';
import { CreateOmniGhostComponent } from 'src/modules/components/components';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { observer } from 'mobx-react';
import { dataStore } from 'src/modules/components/store';
import { ISelectDefaultData } from 'src/modules/components';

export const CreateOmniGhostContainer: FC = observer(() => {
  const navigation = useNavigate();

  const handleClickCreate = useCallback(() => {
    navigation(routeMain.fullPath);
  }, [navigation]);

  const handlerCreate = useCallback((inputId: string, selectArrStatus: ISelectDefaultData[], inputSpeed: number, inputCharging: number, selectArrCondition: ISelectDefaultData[]) => {
    dataStore.createOmniGhostUi(
      inputId,
      selectArrStatus.find(item => item.isActive)?.value,
      inputSpeed,
      inputCharging,
      selectArrCondition.find(item => item.isActive)?.value,
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