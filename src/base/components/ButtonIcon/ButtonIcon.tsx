import React, { ButtonHTMLAttributes, FC } from 'react';
import cx from 'classnames';

import { IWithClassName } from '../../types';
import styles from './styles.module.scss';

export interface IButtonIconProps
  extends IWithClassName,
    ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const ButtonIcon: FC<IButtonIconProps> = ({
  disabled,
  className,
  children,
  ...restProps
}) => {
  return (
    <button
      className={cx(styles.VBButtonIcon, className)}
      disabled={disabled}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
