import React, { ReactElement, UIEventHandler } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';
import { ISvgIconWithClick, IWithClassName } from '../../types';
import { HeaderPanel } from '../HeaderPanel';
import { NavLink } from 'react-router-dom';
import { routeHome } from 'src/base/navigation';
import { ScrollWrapper } from 'src/base/components/ScrollWrapper';

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
            <ScrollWrapper>
              {children}
            </ScrollWrapper>
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
                        <p className={styles.text}>Главная</p>
                      </div>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={routeHome.url}>
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
