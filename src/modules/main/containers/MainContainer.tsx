import React, { FC } from 'react';
// import { getAllProductsAction } from '../actions';
// import { ProductsList } from '../components/ProductsList';
// import { CreateProductButton } from '../components/CreateProductButton';
import { MainLayout } from '../../../base/components';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react';
// import { authStore } from '../../auth/stores';
import { Outlet, useParams } from 'react-router-dom';
import cx from 'classnames';
import styles from './styles.module.scss';
import { routeComponents } from '../../../base/routes/components';
import { routeProducts } from '../../../base/routes';

export const MainContainer: FC = observer(() => {
  const navigate = useNavigate();

  // const isAuth = authStore.isAuth;

  // useEffect(() => {
  //   if (isAuth) {
  //     getAllProductsAction();
  //   }
  // }, [isAuth]);

  // const createProductHandler = useCallback(() => {
  //   navigate(routeProductsEdit.url({ id: 'new' }));
  // }, [navigate]);

  console.log(useParams());

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
            // historyStore.setActiveHistoryList(EHistoryType.Ride);
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

            // historyStore.setActiveHistoryList(EHistoryType.Pay);
          }}
        >
          Компоненты
        </button>
      </div>
      <Outlet />
      {/*<ProductsList />*/}
      {/*<CreateProductButton onChange={createProductHandler} />*/}
    </MainLayout>
  );
});
