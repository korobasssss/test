import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { MainLayout, Spinner } from '../../../base/components';
import { observer } from 'mobx-react';
import { componentsStore } from '../store';
import {
  // createComponentAction,
  getGhostByIdAction,
  // updateComponentAction,
} from '../actions';
import { useNavigateBack } from '../../../base';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { IComponentEdit } from '../types';
// import { useNavigate } from 'react-router';

import {
  // routeComponents,
  routeComponentsView,
} from '../../../base/navigation/routes';
import { convertViewComponentData } from '../helpers';
import { EditComponentForm } from '../components/EditComponentForm';

export const EditComponentContainer: FC = observer(() => {
  const [componentData, setComponentData] =
    useState<Partial<IComponentEdit> | null>(null);

  const { id } = routeComponentsView.useParams();

  const isCreateNewComponent = id === 'new';
  const { goBack } = useNavigateBack();
  // const navigate = useNavigate();

  // const { viewComponent } = componentsStore;

  useLayoutEffect(() => {
    componentsStore.setViewComponent(null);
  }, []);

  useEffect(() => {
    if (!isCreateNewComponent) {
      getGhostByIdAction({ ghostId: id }).then(() => {
        setComponentData(
          convertViewComponentData(componentsStore.viewComponent),
        );
      });
    } else {
      setComponentData(convertViewComponentData(null));
    }
  }, [id, isCreateNewComponent]);

  const handleSubmit = useCallback(
    (data: IComponentEdit) => {
      if (isCreateNewComponent) {
        console.log(data);
        // createComponentAction(data).then(() => navigate(routeComponents.url));
      } else {
        console.log('else');
        // if (viewComponent?.id) {
        //   updateComponentAction({
        //     productId: viewComponent?.id,
        //     data: {
        //       ...data,
        //     },
        //   }).then(() => {
        //     navigate(routeComponentsView.url({ id }));
        //   });
        // }
      }
    },

    [isCreateNewComponent],
  );

  if (componentData === null) return <Spinner />;

  return (
    <MainLayout
      topTitle={
        isCreateNewComponent
          ? 'Создание компонента'
          : 'Редактирование компонента'
      }
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => goBack(),
      }}
    >
      <EditComponentForm
        component={componentData}
        onSubmit={handleSubmit}
        isCreateNewComponent={isCreateNewComponent}
      />
    </MainLayout>
  );
});
