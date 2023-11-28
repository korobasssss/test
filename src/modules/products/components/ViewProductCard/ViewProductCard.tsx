import React, { FC } from 'react';

import styles from './styles.module.scss';
import { IProductView } from '../../types';
import { Button } from '../../../../base/components';
import cx from 'classnames';
import {
  EProductStatus,
  EProductStatusTranslate,
} from '../../constants/EProductStatus';

interface IProps {
  product: IProductView | null;
  onChangeProduct: (args: any) => void;
  onDeleteProduct: (args: any) => void;
}

export const ViewProductCard: FC<IProps> = ({
  product,
  onChangeProduct,
  onDeleteProduct,
}) => {
  if (!product) {
    return null;
  }

  return (
    <div className={styles.body}>
      <section className={styles.cards}>
        <div className={styles.cardItem}>
          <div className={styles.topRow}>
            <p>ID: {product.id}</p>
            <p>{product.name}</p>
            <p>{EProductStatusTranslate[product.status]}</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.itemBody}>
            <p>{product.description}</p>
          </div>
          <div className={styles.bottomRow}>
            <p
              className={cx(styles.features, {
                [styles.features_not_accepted]: product.ableToLicenceTransfer,
              })}
            >
              Возможность переноса лицензий
            </p>
            <p
              className={cx(styles.features, {
                [styles.features_not_accepted]:
                  product.ableToCreateTrialLicense,
              })}
            >
              Возможность генерации пробных лицензий
            </p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={onChangeProduct}
              size="s"
              theme="secondary"
            >
              Редактировать
            </Button>
            {product.status === EProductStatus.DRAFT && (
              <Button
                className={styles.button}
                onClick={onDeleteProduct}
                size="s"
                theme="secondary"
              >
                Удалить
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
