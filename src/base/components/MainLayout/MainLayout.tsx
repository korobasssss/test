import React, { ReactElement, UIEventHandler } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';
import { ISvgIconWithClick, IWithClassName } from '../../types';
import { HeaderPanel } from '../HeaderPanel';
import { NavLink } from 'react-router-dom';
import { routeHome, routeProfile } from '../../navigation/routes';

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
      {/* Нижнее меню */}
      {withBottomNavigation && (
        <section className={styles.bottomMenu}>
          <ul>
            <li>
              <NavLink to={routeHome.url}>
                {({ isActive }) => (
                  <div
                    data-uitest="link-map"
                    className={cx('linkBtn', {
                      linkBtn_active: isActive,
                    })}
                  >
                    {/*<MapIcon width={24} height={24} />*/}
                    <p
                      // size={12}
                      // color={isActive ? 'primary' : 'lightGrey'}
                      className={styles.text}
                    >
                      Главная
                    </p>
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to={routeProfile.url}>
                {({ isActive }) => (
                  <div
                    data-uitest="link-account"
                    className={cx('linkBtn', {
                      linkBtn_active: isActive,
                    })}
                  >
                    <p className={styles.text}>Профиль</p>
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
};
