import React, {FC, useCallback, useEffect, useState} from 'react';
import {MainLayout, Spinner} from "../../../base/components";
import {observer} from "mobx-react";
import {productStore} from "../store";
import {useParams} from "react-router-dom";
import {getProductsAction} from "../actions";
import {useNavigateBack} from "../../../base";
import {ReactComponent as BackLogo} from 'src/assets/icons/back.svg';
import {IProduct} from "../types";
import {EditProductForm} from "../components/EditProductForm/EditProductForm";
import {toJS} from "mobx";


export const EditProductContainer: FC = observer(() => {
  const [productData, setProductData] = useState<IProduct | null>(null);

  const params = useParams()
  console.log(params)
  const {goBack} = useNavigateBack();

  const {viewProduct} = productStore;

  useEffect(() => {
    if (!viewProduct) {
      if (params.id !== 'new') {
        getProductsAction().then(() => {
          productStore.setViewProductById(params.id)
        }).then(() => {
          console.log(toJS(productStore.viewProduct))
          setProductData(productStore.viewProduct)
        })
      } else {
        setProductData({
          ableToLicenceTransfer: false,
          ableToCreateTrialLicence: false,
          status: "DRAFT"
        } as IProduct)
      }
    } else {
      setProductData(productStore.viewProduct)
    }
  }, [params.id, viewProduct]);

  const handleSubmit = useCallback((data: IProduct) => {
    console.log(toJS(data))
  }, [])


  if (productData === null) return <Spinner/>

  return (
    <MainLayout
      topTitle="EditProductContainer"
      leftTopIcon={{
        svg: <BackLogo/>,
        clicked: () => goBack(),
      }}
    >
      <EditProductForm product={productData} onSubmit={handleSubmit}/>
    </MainLayout>
  );
})
