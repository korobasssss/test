import React, { FC } from 'react';
import { IWithClassName } from 'src/base/types';
import styles from './styles.module.scss'
import cx from 'classnames';

interface IListWithLine
  extends IWithClassName {
  isLastItem: boolean;
  margin: 'small' | 'big'
  children: React.ReactNode;
}

export const ListWithLineWrapper: FC<IListWithLine> = (
  {
    isLastItem,
    children,
    margin = 'small',
    className
  },
) => {
  return (
    <div className={className}>
      {children}
      {!isLastItem && (
        <footer className={
          cx(
            `${styles[`margin_${margin}`]}`,
            styles.line_wrapper
          )
        }> </footer>
      )}
    </div>
  );
};