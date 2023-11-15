import React, { FC, SyntheticEvent, useCallback } from 'react';
import { observer } from 'mobx-react';
import { getShortDescription, isArray } from '../../../../base';
import styles from './style.module.scss';
import { EComponentStatus } from '../../constants';
import { useNavigate } from 'react-router';
import { IComponentView } from '../../types';
import { Button, Spinner } from '../../../../base/components';
import {
  routeComponentsEdit,
  routeComponentsView,
} from '../../../../base/routes';
import { componentsStore } from '../../store';
import { toJS } from 'mobx';

export const ComponentsList: FC = observer(() => {
  const { data } = componentsStore;
  console.log(toJS(data));

  const navigate = useNavigate();

  const onChangeComponentHandler = useCallback(
    (item: IComponentView) => {
      return (e: SyntheticEvent) => {
        e.stopPropagation();
        navigate(routeComponentsEdit.url({ id: item.id }));
        componentsStore.setViewComponent(item);
      };
    },
    [navigate],
  );

  const openComponentDetailsHandler = useCallback(
    (item: IComponentView) => {
      return () => {
        componentsStore.setViewComponent(item);
        navigate(routeComponentsView.url({ id: item.id }));
      };
    },
    [navigate],
  );

  const onChangeStatusHandler = useCallback((e: SyntheticEvent) => {
    e.stopPropagation();
    console.log('change status');
  }, []);

  if (componentsStore.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {isArray(data) ? (
        <div className={styles.cards}>
          {data?.map((item) => (
            <div
              className={styles.card_item}
              key={`${item.id}`}
              onClick={openComponentDetailsHandler(item)}
            >
              <div className={styles.top_row}>
                <div className={styles.name}>
                  <p>id: {item.id}</p>
                  <p>{item.name}</p>
                </div>
                <p onClick={onChangeStatusHandler}>
                  статус: {EComponentStatus[item.status]}
                </p>
              </div>
              <div className={styles.body}>
                <p>{getShortDescription(item.description, 50)}</p>
                <div className={styles.buttons}>
                  <Button
                    className={styles.button}
                    onClick={onChangeComponentHandler(item)}
                    size="s"
                    theme="secondary"
                  >
                    Редактировать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className={styles.no_data}>NoData</h2>
      )}
    </>
  );
});
