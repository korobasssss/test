import React, { FC, useCallback, useEffect, useState } from 'react';
import { MainLayout } from 'src/base/components';
import { MainComponent } from 'src/modules/components/components';
import { ReactComponent as SettingsLogo } from 'src/assets/icons/settings.svg';
import { dataStore } from 'src/modules/components/store';
import { observer } from 'mobx-react';

export const MainContainer: FC = observer(() => {
  const [isSettingsOpened, setIsSettingsOpened] = useState(false);

  const handleClickSettings = useCallback(() => {
    setIsSettingsOpened(!isSettingsOpened);
  }, [isSettingsOpened]);

  const { data } = dataStore;

  useEffect(() => {
    dataStore.getData();
  }, []);

  return (
    <MainLayout
      topTitle="Тест"
      rightTopIcon={{
        svg: <SettingsLogo />,
        clicked: () => handleClickSettings(),
      }}
      withBottomNavigation={false}
    >
      <MainComponent
        isSettingsOpened={isSettingsOpened}
        actionSettings={setIsSettingsOpened}
        data={data} />
    </MainLayout>
  );
});