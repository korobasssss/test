import React, { FC } from 'react';
import { MainLayout } from '../../../base/components';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react';
import { Outlet } from 'react-router-dom';
import cx from 'classnames';
import styles from './styles.module.scss';
import {
  routeComponents,
  routeProducts,
} from '../../../base/navigation/routes';

export const MainContainer: FC = observer(() => {
  const navigate = useNavigate();

  const isComponentsPage = Boolean(routeComponents.useMatch());

  return (
    <MainLayout topTitle={!isComponentsPage ? 'Продукты' : 'Компоненты'}>
      <div className={styles.btns}>
        <button
          data-uitest="button-rides-history"
          className={cx(styles.btn, {
            [styles.btnActive]: !isComponentsPage,
          })}
          onClick={() => {
            console.log('Продукты');
            navigate(routeProducts.url);
          }}
        >
          Продукты
        </button>
        <button
          data-uitest="button-payment-history"
          className={cx(styles.btn, {
            [styles.btnActive]: isComponentsPage,
          })}
          onClick={() => {
            console.log('Компоненты');
            navigate(routeComponents.url);
          }}
        >
          Компоненты
        </button>
      </div>
      <Outlet />
    </MainLayout>
  );
});
