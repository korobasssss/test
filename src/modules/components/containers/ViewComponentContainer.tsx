import React, { FC, SyntheticEvent, useCallback, useEffect } from 'react';
import { MainLayout } from '../../../base/components';
import { ViewComponentCard } from '../components/ViewComponentCard';
import { observer } from 'mobx-react';
import { deleteComponentAction } from '../actions';
import { useNavigateBack } from '../../../base';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { useNavigate } from 'react-router';
import { IComponentView } from '../types';
import { getComponentAction } from '../actions/getComponentAction';
import {
  routeComponentEdit,
  routeComponentsView,
  routeComponents,
} from '../../../base/routes';
import { componentsStore } from '../store';

export const ViewComponentContainer: FC = observer(() => {
  const { id } = routeComponentsView.useParams();
  const { goBack } = useNavigateBack();

  const { viewComponent } = componentsStore;

  const navigate = useNavigate();

  const onChangeComponentHandler = useCallback(
    (item: IComponentView) => {
      return (e: SyntheticEvent) => {
        e.stopPropagation();
        navigate(routeComponentEdit.url({ id: item.id }));
        componentsStore.setViewComponent(item);
      };
    },
    [navigate],
  );

  const onDeleteComponentHandler = useCallback(() => {
    if (viewComponent?.id) {
      deleteComponentAction({ productId: viewComponent?.id }).then(() => {
        navigate(routeComponents.url);
      });
    }
  }, [navigate, viewComponent?.id]);

  useEffect(() => {
    if (!viewComponent) {
      getComponentAction({ componentId: id });
    }
  }, [id, viewComponent]);

  if (componentsStore.isLoading) return <>...Loading</>;

  return (
    <MainLayout
      topTitle="SelectedComponentContainer"
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => goBack(),
      }}
    >
      <ViewComponentCard
        component={viewComponent}
        onChangeComponent={onChangeComponentHandler(viewComponent!)}
        onDeleteComponent={onDeleteComponentHandler}
      />
    </MainLayout>
  );
});
