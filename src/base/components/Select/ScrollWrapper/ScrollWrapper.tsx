import React from 'react';
import classes from './style.module.scss';
import { IWithChildren } from '../../../types';
import cx from 'classnames';

interface IProps extends IWithChildren {
  maxHeight?: number;
  className?: string;
}

// добавляет вертикальный скролл
export default function ScrollWrapper(props: IProps): JSX.Element {
  const { children, maxHeight, className } = props;

  const styleParams = {
    maxHeight:
      typeof maxHeight === 'number'
        ? `${maxHeight}px`
        : '-webkit-fill-available',
  };

  return (
    <div className={cx(className, classes.scroll_wrapper)} style={styleParams}>
      {children}
    </div>
  );
}
