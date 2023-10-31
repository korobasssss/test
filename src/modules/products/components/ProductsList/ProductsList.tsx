import React, {FC, SyntheticEvent, useCallback} from 'react';
import {observer} from "mobx-react";
import {productStore} from "../../store";
import {getShortDescription, isArray, routes} from "../../../../base";
import styles from './style.module.scss';
import {EProductStatus} from "../../constants/EProductStatus";
import {useNavigate} from "react-router";
import {IProduct} from "../../types";
import {Button, Spinner} from "../../../../base/components";


export const ProductsList: FC = observer(() => {
  const {data} = productStore;

  const navigate = useNavigate();

  const onChangeProductHandler = useCallback((item: IProduct) => {
    return (e: SyntheticEvent) => {
      e.stopPropagation()
      navigate(routes.product.edit.url(item.id));
      productStore.setViewProduct(item)
    }
  }, [navigate])

  const openProductDetailsHandler = useCallback((item: IProduct) => {
    return () => {
      productStore.setViewProduct(item)
      navigate(routes.product.url(item.id));
    }
  }, [navigate])

  const onChangeStatusHandler = useCallback((e: SyntheticEvent) => {
    e.stopPropagation()
    console.log('change status')
  }, [])

  if (productStore.isLoading) {
    return <Spinner/>
  }

  return (
    <>
      {isArray(data) ?
        <div className={styles.cards}>{data?.map((item) => (
          <div
            className={styles.card_item}
            key={`${item.id}`}
            onClick={openProductDetailsHandler(item)}
          >
            <div className={styles.top_row}>
              <div className={styles.name}>
                <p>id: {item.id}</p>
                <p>{item.name}</p>
              </div>
              <p onClick={onChangeStatusHandler}>статус: {EProductStatus[item.status]}</p>
            </div>
            <div className={styles.body}>
              <p>
                {getShortDescription(item.description, 50)}
              </p>
              <div className={styles.buttons}>
                <Button
                  className={styles.button}
                  onClick={onChangeProductHandler(item)}
                  size="s"
                  theme="secondary"
                >
                  Редактировать
                </Button>
              </div>
            </div>

          </div>
        ))}</div>
        : <h2 className={styles.no_data}>NoData</h2>}
    </>
  )
});
