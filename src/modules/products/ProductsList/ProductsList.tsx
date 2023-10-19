import React, {FC, SyntheticEvent, useCallback} from 'react';
import {observer} from "mobx-react";
import {productStore} from "../store";
import {toJS} from "mobx";
import {MainLayout} from "../../../base/components";
import {isArray} from "../../../base/utils";
import styles from './style.module.scss';
import {Button} from "../../../base/components/Button";
import {EProductStatus} from "../constants/EProductStatus";


export const ProductsList: FC = observer(() => {
  const {data} = productStore;
  console.log(toJS(data))

  const onChangeProductHandler = useCallback((e: SyntheticEvent) => {
    e.stopPropagation()
    console.log('change product')
  }, [])

  const onChangeStatusHandler = useCallback((e: SyntheticEvent) => {
    e.stopPropagation()
    console.log('change status')
  }, [])

  return (
    <MainLayout topTitle="Продукты">
      {isArray(data) ?
        <div className={styles.cards}>{data?.map((item) => (
          <div
            className={styles.card_item}
            key={`${item.id}`}
            onClick={() => {
              console.log(toJS(item))
              // navigate(`pay/${item.StartDate.toString()}`);
            }}
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
                {item.description}
              </p>
              <div className={styles.buttons}>
                <Button
                  className={styles.button}
                  onClick={onChangeProductHandler}
                  size="s"
                  theme="secondary"
                >Редактировать
                </Button>
              </div>
            </div>

          </div>
        ))}</div>
        : <h2 className={styles.no_data}>NoData</h2>}


      {/*<div className={styles.body}>*/}
      {/*  <h1> Продукты</h1>*/}
      {/*  <button>Создать новый продукт</button>*/}
      {/*</div>*/}
    </MainLayout>
  )
});
