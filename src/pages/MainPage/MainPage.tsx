import React, { FC, useCallback, useState } from 'react';
import { ReactComponent as SettingsLogo } from 'src/assets/icons/settings.svg';
import { MainLayout} from 'src/base/components';
import { MainComponent } from 'src/components/MainComponent';

export const MainPage: FC = () => {

  const [isSettingsOpened, setIsSettingsOpened] = useState(false);

  const handleClickSettings = useCallback(() => {
    setIsSettingsOpened(!isSettingsOpened);
  }, [isSettingsOpened]);

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
      />
    </MainLayout>
  );
}