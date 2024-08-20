import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { MainLayout } from 'src/base/components';
import { routeMain } from 'src/base/navigation';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { ReactComponent as DeleteLogo } from 'src/assets/icons/delete.svg';
import { CardComponent } from 'src/modules/components/components';

export const CardPage : FC = () => {
  const navigation = useNavigate();

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const handleOpenDeleteCardPopup = useCallback(() => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  }, [isDeletePopupOpen]);

  return (
    <MainLayout
      topTitle="OmniGhost 55478"
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => {
          navigation(routeMain.fullPath);
        },
      }}
      rightTopIcon={{
        svg: <DeleteLogo />,
        clicked: () => handleOpenDeleteCardPopup(),
      }}
      withBottomNavigation={false}
    >
      <CardComponent
        handleOpenDeleteCardPopup={handleOpenDeleteCardPopup}
        isDeletePopupOpen />
    </MainLayout>
  );
}