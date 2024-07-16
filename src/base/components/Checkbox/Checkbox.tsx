import React, { forwardRef } from 'react';
import cx from 'classnames';

import { IFieldBaseOptions, IWithClassName } from '../../types';
import styles from './styles.module.scss';

export interface ICheckboxProps extends IWithClassName, IFieldBaseOptions {
  id?: string;
  svg?: JSX.Element;
  initialValue?: boolean;
  label?: string;
  partialChecked?: boolean;
  value?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ className, id, svg, initialValue, label, value, ...restProps }, ref) => {
    const checkboxId = id ? id : restProps.name;

    return (
      <div className={cx(styles.VBCheckbox, className, {
        [styles.hidden]: svg && !value,
      })}>
        <input
          {...restProps}
          className={styles.vbCheckboxInput}
          defaultChecked={initialValue}
          id={checkboxId}
          ref={ref}
          type="checkbox"
          checked={value}
        />

        <label className={cx({
          [styles.vbCheckboxLabel] : !svg
        })} htmlFor={checkboxId}>
          <b />
          {svg ? svg : label}
        </label>
      </div>
    );
  },
);
