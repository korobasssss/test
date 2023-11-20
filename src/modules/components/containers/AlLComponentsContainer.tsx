import React, { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react';
import { CreateButton } from '../../../base/components/CreateProductButton';
import { routeComponentEdit } from '../../../base/routes';
import { getAllComponentsAction } from '../actions';
import { ComponentsList } from '../components/ComponentsList';

export const AlLComponentsContainer: FC = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    getAllComponentsAction();
  });

  const createComponentHandler = useCallback(() => {
    navigate(routeComponentEdit.url({ id: 'new' }));
  }, [navigate]);

  return (
    <>
      <ComponentsList />
      <CreateButton
        onChange={createComponentHandler}
        title="Создать новый компонент"
      />
    </>
  );
});
