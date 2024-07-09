import React, { forwardRef } from 'react';
import cx from 'classnames';

import { IFieldBaseOptions, IWithClassName } from '../../types';
import styles from './styles.module.scss';

export interface ICheckboxProps extends IWithClassName, IFieldBaseOptions {
  id?: string;
  initialValue?: boolean;
  label?: string;
  partialChecked?: boolean;
  value?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ className, id, initialValue, label, value, ...restProps }, ref) => {
    const checkboxId = id ? id : restProps.name;

    return (
      <div className={cx(styles.VBCheckbox, className)}>
        <input
          {...restProps}
          className={styles.vbCheckboxInput}
          defaultChecked={initialValue}
          id={checkboxId}
          ref={ref}
          type="checkbox"
          checked={value}
        />

        <label className={styles.vbCheckboxLabel} htmlFor={checkboxId}>
          <b />
          {label}
        </label>
      </div>
    );
  },
);
