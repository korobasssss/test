import React, { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { getGhostByIdAction } from 'src/modules/components/actions';
import { LoadingWrapper, MainLayout, Popup } from 'src/base/components';
import { CardComponent } from 'src/modules/components/components';
import { selectedDataStore } from 'src/modules/components/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeMain } from 'src/base/navigation';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { ReactComponent as DeleteLogo } from 'src/assets/icons/delete.svg';

export const CardContainer: FC = observer(() => {
  const location = useLocation();

  const handlerUpdateData = useCallback((id: number) => {
    getGhostByIdAction(
      {
        ghostId: id
      },
    );
  }, []);

  useEffect(() => {
    const id = Number.parseInt(location.pathname.split('/').pop() as string, 10)
    handlerUpdateData(id);
  }, [location.pathname, handlerUpdateData]);

  const { data } = selectedDataStore;

  const navigation = useNavigate();

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const handleOpenDeleteCardPopup = useCallback(() => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  }, [isDeletePopupOpen]);

  const handleClickSubmit = useCallback(() => {
    console.log('click submit');
  }, []);

  if (selectedDataStore.isLoading) return <LoadingWrapper />;

  if (!data) return null;

  return (
    <MainLayout
      topTitle={`OmniGhost ${data.id}`}
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
        data={data}
      />
      {isDeletePopupOpen && (
        <Popup
          headerTitle={`Удалить OmniGhost ${data.id}`}
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
              OmniGhost {data.id}?
            </div>
          </div>
        </Popup>
      )}
    </MainLayout>
  );
});