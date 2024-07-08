import { IWithClassName } from 'src/base/types';
import React, { FC, ReactElement, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface IWhiteSectionProps extends IWithClassName {
  children: ReactNode | ReactElement;
}

export const WhiteSection: FC<IWhiteSectionProps> = ({
                                                       children,
                                                       className,
                                                     }) => {

  return (
    <section
      className={cx(
        styles.white_section,
        className,
      )}>
      {children}
    </section>
  );
};