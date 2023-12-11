import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { getProfileAction } from '../actions';
import { ProfileCard } from '../components/ProfileCard';
import { profileStore } from '../store';
import { ReactComponent as BackLogo } from '../../../assets/icons/back.svg';
import { MainLayout } from '../../../base/components';
import { useNavigateBack } from '../../../base';

export const ProfileContainer: FC = observer(() => {
  const { data } = profileStore;
  const { goBack } = useNavigateBack();

  useEffect(() => {
    getProfileAction();
  }, []);

  return (
    <MainLayout
      topTitle="Профиль"
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => goBack(),
      }}
    >
      <ProfileCard profile={data} />
    </MainLayout>
  );
});
