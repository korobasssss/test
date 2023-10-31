import React, {FC} from 'react';

import styles from './styles.module.scss';
import {IProduct} from "../../types";
import {Button} from "../../../../base/components";
import cx from "classnames";
import {EProductStatus} from "../../constants/EProductStatus";

interface IProps {
  product: IProduct | null;
  onChangeProduct: (args: any) => void
}

export const ViewProductCard: FC<IProps> = ({product, onChangeProduct}) => {
  if (!product) {
    return null
  }

  return (
    <div className={styles.body}>
      <section className={styles.cards}>
        <div className={styles['card-item']}>
          <div className={styles['top-row']}>
            <p>
              ID: {product.id}
            </p>
            <p>
              {product.name}
            </p>
            <p>{EProductStatus[product.status]}</p>
          </div>
        </div>
        <div className={styles['card-item']}>
          <div className={styles["item-body"]}>
            <p>{product.description}</p>
          </div>
          <div className={styles['bottom-row']}>
            <p
              className={cx(styles.features, {[styles.features_not_accepted]: product.ableToLicenceTransfer})}
            >
              Возможность
              переноса лицензий
            </p>
            <p
              className={cx(styles.features, {[styles.features_not_accepted]: product.ableToCreateTrialLicence})}
            >
              Возможность генерации пробных лицензий
            </p>
          </div>
        </div>
        <div className={styles['card-item']}>
          <div className={styles["item-body"]}>
            <Button
              className={styles.button}
              onClick={onChangeProduct}
              size="s"
              theme="secondary"
            >Редактировать
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
