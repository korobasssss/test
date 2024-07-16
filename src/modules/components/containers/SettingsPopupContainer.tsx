import React, { FC, useCallback } from 'react';
import { SettingsPopupComponent } from 'src/modules/components/components';
import { postEnvironmentAction } from 'src/modules/components/actions/postEnvironmentAction';

export const SettingsPopupContainer : FC = () => {

  const handleSetEnvironment = useCallback((data: string) => {
    postEnvironmentAction(data)
  }, []);

  return <SettingsPopupComponent handleSetEnvironment={handleSetEnvironment}/>
}