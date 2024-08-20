import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { MainLayout, Popup } from 'src/base/components';
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

  const handleClickSubmit = useCallback(() => {
    console.log('click submit');
  }, []);

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
        isDeletePopupOpen
      />
      {isDeletePopupOpen && (
        <Popup
          headerTitle="Удалить OmniGhost 55478"
          isOpen={isDeletePopupOpen}
          handleClosePopup={handleOpenDeleteCardPopup}
          isCancelButton
          handleClickSubmit={handleClickSubmit}
          handleCancelButtonClick={handleOpenDeleteCardPopup}
          submitButtonLabel='Удалить'
          cancelButtonLabel='Отмена'
        >
          <div>Вы точно хотите удалить
            <div>
              OmniGhost 55478?
            </div>
          </div>
        </Popup>
      )}
    </MainLayout>
  );
}