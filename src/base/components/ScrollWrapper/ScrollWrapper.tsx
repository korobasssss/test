import { IWithClassName } from 'src/base/types';
import React, { FC, ReactElement, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface IScrollWrapperProps extends IWithClassName {
  children: ReactNode | ReactElement;
}

export const ScrollWrapper: FC<IScrollWrapperProps> = ({
                                                        children,
                                                        className,
                                                      }) => {

  return (
    <section
      className={cx(
        styles.scroll_wrapper,
        className,
      )}>
      {children}
    </section>
  );
};