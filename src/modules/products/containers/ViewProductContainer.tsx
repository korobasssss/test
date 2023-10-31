import React, {FC, SyntheticEvent, useCallback, useEffect} from 'react';
import {MainLayout} from "../../../base/components";
import {ViewProductCard} from "../components/ViewProductCard";
import {observer} from "mobx-react";
import {productStore} from "../store";
import {useParams} from "react-router-dom";
import {getProductsAction} from "../actions";
import {routes, useNavigateBack} from "../../../base";
import {ReactComponent as BackLogo} from 'src/assets/icons/back.svg';
import {useNavigate} from "react-router";
import {IProduct} from "../types";


export const ViewProductContainer: FC = observer(() => {
  const params = useParams()
  const {goBack} = useNavigateBack();

  const {viewProduct} = productStore;

  const navigate = useNavigate();

  const onChangeProductHandler = useCallback((item: IProduct) => {
    return (e: SyntheticEvent) => {
      e.stopPropagation()
      navigate(routes.product.edit.url(item.id));
      productStore.setViewProduct(item)
    }
  }, [navigate])

  useEffect(() => {
    if (!viewProduct) {
      getProductsAction().then(() => {
        productStore.setViewProductById(params.id)
      })
    }
  }, [params.id, viewProduct]);

  if (productStore.isLoading) return <>...Loading</>

  return (
    <MainLayout
      topTitle="SelectedProductContainer"
      leftTopIcon={{
        svg: <BackLogo/>,
        clicked: () => goBack(),
      }}
    >
      <ViewProductCard product={viewProduct} onChangeProduct={onChangeProductHandler(viewProduct!)}/>
    </MainLayout>
  );
})
