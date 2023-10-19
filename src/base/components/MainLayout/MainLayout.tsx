import React, {ReactElement, UIEventHandler} from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';
import {ISvgIconWithClick, IWithClassName} from "../../types";
import {HeaderPanel} from "../HeaderPanel";

const cx = classNames.bind(styles);

export interface IMainMenuLayoutProps extends IWithClassName {
  children: React.ReactNode;
  leftTopIcon?: ISvgIconWithClick;
  topTitle?: string;
  rightTopIcon?: ISvgIconWithClick;
  withBottomNavigation?: boolean;
  onScroll?: UIEventHandler<HTMLDivElement>;
  contentClassName?: string;
}

export const MainLayout = ({
  children,
  topTitle,
  leftTopIcon,
  rightTopIcon,
  withBottomNavigation = true,
  onScroll,
  className,
  contentClassName,
}: IMainMenuLayoutProps): ReactElement => {
  // const t = useTranslation();
  return (
    <div className={cx('container', className)}>
      {/* Верхняя панель */}
      {topTitle && (
        <section className={styles.topPanel}>
          <HeaderPanel
            leftIcon={leftTopIcon}
            title={topTitle ? topTitle : ''}
            rightIcon={rightTopIcon}
          />
        </section>
      )}
      {/* Секция контента */}
      <section
        onScroll={onScroll}
        className={cx(
          'content',
          {
            content_withTop: topTitle,
            content_withBottomMenu: withBottomNavigation,
          },
          contentClassName,
        )}
      >
        {children}
      </section>
    </div>
  );
};
