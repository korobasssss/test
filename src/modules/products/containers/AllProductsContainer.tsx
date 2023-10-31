import React, {FC, useCallback, useEffect} from 'react';
import {getProductsAction} from "../actions";
import {ProductsList} from "../components/ProductsList";
import {CreateProductButton} from "../components/NewProductButton";
import {MainLayout} from "../../../base/components";
import {routes} from "../../../base";
import {useNavigate} from "react-router";

export const AllProductsContainer: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getProductsAction()
  }, []);

  const createProductHandler = useCallback(() => {
    navigate(routes.product.edit.url('new'));
  }, [navigate])

  return (
    <MainLayout topTitle="Продукты">
      <ProductsList/>
      <CreateProductButton
        onChange={createProductHandler}
      />
    </MainLayout>
  );
}
