import classNames from 'classnames/bind';
import React, {forwardRef, InputHTMLAttributes, Ref} from 'react';
// import {FieldValues, UseFormRegister} from 'react-hook-form';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete?: 'on' | 'off';
  ref?: Ref<HTMLInputElement | null>;
  label?: string;
  errorMessage?: string;
  // register?: UseFormRegister<FieldValues>;
  staticPlaceholder?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      autoComplete = 'on',
      disabled,
      id,
      placeholder,
      type = 'text',
      readOnly,
      label,
      errorMessage,
      staticPlaceholder,
      className,
      ...restProps
    },
    ref,
  ) => {
    return label ? (
      <>
        <div
          className={cx('LICInputContainer', className, {
            LICInputContainer__readonly: readOnly,
          })}
        >
          <label className={styles['LICInput-label']} htmlFor={id}>
            {label}
          </label>
          <input
            {...restProps}
            autoComplete={autoComplete}
            className={cx('LICInputContainer-input', {
              'LICInputContainer-input__readonly': readOnly,
            })}
            disabled={disabled}
            id={id}
            placeholder={readOnly ? '' : placeholder}
            ref={ref}
            type={type}
            readOnly={readOnly}
          />
        </div>
        {errorMessage && (
          <p className={styles.error}>
            {errorMessage}
          </p>
        )}
      </>
    ) : (
      <>
        <input
          {...restProps}
          autoComplete={autoComplete}
          className={cx('LICInput', className)}
          disabled={disabled}
          id={id}
          placeholder={readOnly || staticPlaceholder ? '' : placeholder}
          ref={ref}
          type={type}
          readOnly={readOnly}
        />
        {errorMessage && (
          <p className={styles.error}>
            {errorMessage}
          </p>
        )}
      </>
    );
  },
);
