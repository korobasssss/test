import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react';
import { Navigate, Outlet } from 'react-router-dom';
import cx from 'classnames';
import { MainLayout } from 'src/base/components';
import {
  routeComponents,
  routeHome,
  routeProducts,
  routeWelcome,
} from 'src/base/navigation';
import styles from './styles.module.scss';

export const MainContainer: FC = observer(() => {
  const navigate = useNavigate();

  const isComponentsPage = Boolean(routeComponents.useMatch());

  if (routeHome.useMatch()) {
    return <Navigate to={routeWelcome.url} />;
  }

  return (
    <MainLayout topTitle={!isComponentsPage ? 'Продукты' : 'Компоненты'}>
      <div className={styles.btns}>
        <button
          data-uitest="button-rides-history"
          className={cx(styles.btn, {
            [styles.btnActive]: !isComponentsPage,
          })}
          onClick={() => {
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
