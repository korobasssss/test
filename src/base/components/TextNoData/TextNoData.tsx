import styles from './styles.module.scss'
import React, { FC } from 'react';

export const TextNoData : FC = () => {
  return <h2 className={styles.message}>Нет данных</h2>
}