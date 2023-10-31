import React, {FC, SyntheticEvent, useCallback, useEffect} from 'react';
import {MainLayout} from "../../../base/components";
import {ViewProductCard} from "../components/ViewProductCard";
import {observer} from "mobx-react";
import {productStore} from "../store";
import {useParams} from "react-router-dom";
import {getProductsAction} from "../actions";
import {useNavigateBack} from "../../../base";
import {ReactComponent as BackLogo} from 'src/assets/icons/back.svg';


export const ViewProductContainer: FC = observer(() => {
  const params = useParams()
  const {goBack} = useNavigateBack();

  const {viewProduct} = productStore;

  useEffect(() => {
    if (!viewProduct) {
      getProductsAction().then(() => {
        productStore.setViewProductById(params.id)
      })
    }
  }, [params.id, viewProduct]);

  const onChangeProductHandler = useCallback((e: SyntheticEvent) => {
    e.stopPropagation()
    console.log('change product')
  }, [])


  if (productStore.isLoading) return <>...Loading</>

  return (
    <MainLayout
      topTitle="SelectedProductContainer"
      leftTopIcon={{
        svg: <BackLogo/>,
        clicked: () => goBack(),
      }}
    >
      <ViewProductCard product={viewProduct} onChangeProduct={onChangeProductHandler}/>
    </MainLayout>
  );
})
