import React, { FC } from 'react';
import styles from './styles.module.scss'

export const LoadingWrapper : FC = () => {

  return (
    <section className={styles.body}>
      <div>Загрузка...</div>
    </section>
  )
}