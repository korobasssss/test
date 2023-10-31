import classNames from 'classnames/bind';
import React, {forwardRef, TextareaHTMLAttributes, Ref} from 'react';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoComplete?: 'on' | 'off';
  ref?: Ref<HTMLTextAreaElement | null>;
  label?: string;
  errorMessage?: string;
  staticPlaceholder?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (
    {
      autoComplete = 'on',
      disabled,
      id,
      placeholder,
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
          className={cx('LICTextAreaContainer', className, {
            LICTextAreaContainer__readonly: readOnly,
          })}
        >
          <label className={styles['LICTextArea-label']} htmlFor={id}>
            {label}
          </label>
          <textarea
            {...restProps}
            autoComplete={autoComplete}
            className={cx('LICTextAreaContainer-input', {
              'LICTextAreaContainer-input__readonly': readOnly,
            })}
            disabled={disabled}
            id={id}
            placeholder={readOnly ? '' : placeholder}
            ref={ref}
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
        <textarea
          {...restProps}
          autoComplete={autoComplete}
          className={cx('LICTextArea', className)}
          disabled={disabled}
          id={id}
          placeholder={readOnly || staticPlaceholder ? '' : placeholder}
          ref={ref}
          // type={type}
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
