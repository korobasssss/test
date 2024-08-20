import React, { FC } from 'react';
import styles from './styles.module.scss'

interface ICardInfoItemComponent {
  title: string
  data: string
}

export const CardInfoItemComponent : FC<ICardInfoItemComponent> = (
  {
    title,
    data
  }
) => {
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.data}>
        {data}
      </div>
    </div>
  )
}