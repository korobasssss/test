import React, {FC, useEffect} from 'react';
import {getProductsAction} from "../actions";
import {ProductsList} from "../ProductsList";

export const ProductsContainer: FC = () => {
  useEffect(() => {
    getProductsAction()
  }, []);

  return (<ProductsList/>);
}
