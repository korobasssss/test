import React, { FC } from 'react';

import styles from './styles.module.scss';
import { IComponentView } from '../../types';
import { Button } from '../../../../base/components';
import { EComponentStatusTranslate } from '../../constants/EComponentStatus';

interface IProps {
  component: IComponentView | null;
  onChangeComponent: (args: any) => void;
  onDeleteComponent: (args: any) => void;
}

export const ViewComponentCard: FC<IProps> = ({
  component,
  onChangeComponent,
  onDeleteComponent,
}) => {
  if (!component) {
    return null;
  }

  return (
    <div className={styles.body}>
      <section className={styles.cards}>
        <div className={styles.cardItem}>
          <div className={styles.topRow}>
            <p>ID: {component.id}</p>
            <p>{component.name}</p>
            <p>{EComponentStatusTranslate[component.status]}</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.itemBody}>
            <p>{component.description}</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={onChangeComponent}
              size="s"
              theme="secondary"
            >
              Редактировать
            </Button>
            <Button
              className={styles.button}
              onClick={onDeleteComponent}
              size="s"
              theme="secondary"
            >
              Удалить
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
