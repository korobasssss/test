import styles from './styles.module.scss';
import React, { FC } from 'react';

interface ICreateItemComponent {
  title: string
  children: React.ReactNode
}

export const CreateItemComponent : FC<ICreateItemComponent> = (
  {
    title,
    children
  }
) => {
  return (
    <div className={styles.list_item}>
      <header className={styles.header}>
        {title}
      </header>
      {children}
    </div>
  )
}