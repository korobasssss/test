import React, {
  FC,
  ReactElement,
  ReactNode, useCallback,
  useState,
} from 'react';
import cx from 'classnames';

import { Button } from '../Button';

import {ReactComponent as CloseLogo} from 'src/assets/icons/closeIcon.svg';
import styles from './styles.module.scss';
import { useSwipeable } from 'react-swipeable';
import { IWithClassName } from '../../types';
import line_icon from 'src/assets/icons/line.svg';
import { HeaderPanel } from 'src/base/components';

interface IPopupProps extends IWithClassName {
  topTitle: string;
  handleClickSubmit?: () => void;
  handleClosePopup: (flag: boolean) => void;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  submitButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
  children: ReactNode | ReactElement;
  setIsOpen: (flag: boolean) => void,
  isCancelButton?: boolean;
  isBottomSheet?: boolean;
  isDoNotUseSwipeHandlers?: boolean;
  headerFontSize?: number | null;
  showSubtitle?: boolean;
}

export const PopupDown: FC<IPopupProps> = ({
                                             children,
                                             topTitle,
                                             handleClickSubmit,
                                             handleClosePopup,
                                             submitButtonDisabled,
                                             submitButtonLabel,
                                             className,
                                           }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handlerSetClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      if (handleClosePopup) {
        handleClosePopup(false);
      }
    }, 150);
  }, [handleClosePopup]);


  const config = {
    preventScrollOnSwipe: false,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
    touchEventOptions: { passive: true },
  };

  const handlers = useSwipeable({
    onSwipedDown: () => handlerSetClose(),
    ...config,
  });

  return (
    <section className={styles.body}>
      <div className={cx(styles.dark_bg, {
        [styles.open_overflow]: isVisible,
        [styles.close_overflow]: !isVisible,
      }, className)}> </div>
      <section className={cx(styles.modal_section, {
        [styles.open_modal_section]: isVisible,
        [styles.close_modal_section]: !isVisible,
      })}>
        <header className={styles.header}>
          <Button {...handlers} className={styles.line_section}
                  size="xxs">
            <img src={line_icon} alt="line icon" />
          </Button>
          <HeaderPanel title={topTitle} rightIcon={{
            svg: <CloseLogo />,
            clicked: () => handlerSetClose(),
          }}/>
        </header>
        <main className={styles.main}>
          {children}
          <div className={styles.footer}>
            <Button
              disabled={submitButtonDisabled}
              onClick={handleClickSubmit}
              theme="primary"
              size="l"
            >
              {submitButtonLabel}
            </Button>
          </div>
        </main>
      </section>
    </section>
  );
};
