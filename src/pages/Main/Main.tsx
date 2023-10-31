import React, {ReactElement} from 'react';
import {AllProductsContainer} from "../../modules/products";
import {Route, Routes} from "react-router-dom";
import {ViewProductContainer} from "../../modules/products/containers";
import {routes} from "../../base";
import {EditProductContainer} from "../../modules/products/containers/EditProductContainer";

// import styles from './styles.module.scss';


export const MainPage = (): ReactElement => {
  return (
    <>
      <Routes>
        <Route path={routes.main.path}>
          <Route index element={<AllProductsContainer/>}/>
          <Route
            path={routes.product.path}
            element={<ViewProductContainer/>}
          />
          <Route
            path={routes.product.edit.path}
            element={<EditProductContainer/>}
          />
          {/*<Route path="ride/:id" element={<RidingHistoryCardContainer/>}/>*/}
        </Route>
      </Routes>
    </>
  )
};
