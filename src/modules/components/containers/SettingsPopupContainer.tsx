import React, { FC, useCallback } from 'react';
import { SettingsPopupComponent } from 'src/modules/components/components';
import { setEnvironmentAction } from 'src/modules/components/actions/setEnvironmentAction';

export const SettingsPopupContainer : FC = () => {

  const handleSetEnvironment = useCallback((data: string) => {
    setEnvironmentAction(data)
  }, []);

  return <SettingsPopupComponent handleSetEnvironment={handleSetEnvironment}/>
}