import React, {
  FC,
  ReactElement,
  ReactNode, useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';

import { Button } from '../Button';

import { ReactComponent as CloseIcon } from 'src/assets/icons/closeIcon.svg';
import styles from './styles.module.scss';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { IWithClassName } from '../../types';

interface IPopupProps extends IWithClassName {
  headerTitle: ReactNode;
  handleClickSubmit?: () => void;
  handleCancelButtonClick?: () => void;
  handleClosePopup?: () => void;
  submitButtonLabel?: ReactNode;
  cancelButtonLabel?: ReactNode;
  submitButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
  children: ReactNode | ReactElement;
  isOpen: boolean;
  isCancelButton?: boolean;
  isBottomSheet?: boolean;
  isDoNotUseSwipeHandlers?: boolean;
  headerFontSize?: number | null;
  showSubtitle?: boolean;
}

export const Popup: FC<IPopupProps> = ({
  children,
  headerTitle,
  handleClickSubmit,
  handleClosePopup,
  handleCancelButtonClick,
  submitButtonDisabled,
  submitButtonLabel,
  cancelButtonDisabled,
  cancelButtonLabel,
  isOpen = false,
  isCancelButton = true,
  isBottomSheet = false,
  className,
  isDoNotUseSwipeHandlers,
  headerFontSize = 18,
  showSubtitle = true,
}) => {
  const [destinationExists, setDestinationExists] = useState(false);
  const destinationElement = useRef<HTMLDivElement>();

  const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  const [willBeClosed, setWillBeClosed] = useState(false);
  const [isOpenCopy, setIsOpenCopy] = useState(isOpen);

  const handleWillBeClosed = useCallback(() => {
    if (handleClosePopup) {
      setWillBeClosed(true);
      setIsOpenCopy(false)
      setTimeout(() => {
        handleClosePopup();
        setWillBeClosed(false);
      }, 100);
    }
  }, [handleClosePopup]);

  let currentSwipeHandlers: SwipeableHandlers | undefined = useSwipeable({
    onSwipedDown: handleWillBeClosed
  });

  if (isDoNotUseSwipeHandlers) {
    currentSwipeHandlers = undefined;
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles['VBPopup-body__opened']);
    } else {
      document.body.classList.remove(styles['VBPopup-body__opened']);
    }
  }, [isOpen]);

  useEffect(() => {
    destinationElement.current = document.createElement('div');
    destinationElement.current.classList.add('VBPopupDestination');
    document.body.append(destinationElement.current);
    setDestinationExists(true);

    return () => {
      destinationElement.current?.remove();
      setDestinationExists(false);
    };
  }, []);
  return (
    <>
      {destinationExists &&
        destinationElement.current &&
        createPortal(
          <div
            className={cx(
              styles.VBOverlay,
              {
                [styles['VBOverlay-opened']]: isOpenCopy,
                [styles['VBOverlay-closed']]: !isOpenCopy,
                [styles.BottomSheet]: isBottomSheet,
              },
              'VBOverlay',
              className,
            )}
          >
            <div
              data-uitest="popup-container"
              className={cx(styles['VBPopup-centered'], 'VBPopup-centered', {
                [styles.willBeClosed]: willBeClosed,
              })}
              {...currentSwipeHandlers}
            >
              <div
                onClick={handleStopPropagation}
                className={cx(styles['VBPopup-modal'], 'VBPopup-modal')}
              >
                <div
                  className={cx(
                    styles['VBPopup-modal-header'],
                    'VBPopup-modal-header',
                  )}
                >
                  <div
                    style={{ fontSize: `${headerFontSize}px` }}
                    className={cx(
                      styles['VBPopup-modal-header__title'],
                      {
                        [styles['VBPopup-modal-header__title-center']]:
                          !handleClosePopup,
                      },
                      'VBPopup-modal-header__title',
                    )}
                  >
                    {headerTitle}
                  </div>
                  {handleClosePopup && (
                    <div
                      data-uitest="close-popup"
                      onClick={handleWillBeClosed}
                      className={cx(
                        styles['VBPopup-modal-header__closeIcon'],
                        'VBPopup-modal-header__closeIcon',
                      )}
                    >
                      <CloseIcon width={24} height={24} />
                    </div>
                  )}
                </div>
                {showSubtitle && (
                  <div
                    className={cx(
                      styles['VBPopup-modal-subtitle'],
                      'VBPopup-modal-subtitle',
                    )}
                  >
                    {children}
                  </div>
                )}
                <div
                  className={cx(
                    styles['VBPopup-modal-footer'],
                    'VBPopup-modal-footer',
                  )}
                >
                  {handleClickSubmit && (
                    <Button
                      theme='primary'
                      disabled={submitButtonDisabled}
                      onClick={handleClickSubmit}
                      size="m"
                    >
                      {submitButtonLabel ?? 'ok'}
                    </Button>
                  )}
                  {handleCancelButtonClick && isCancelButton && (
                    <Button
                      disabled={cancelButtonDisabled}
                      onClick={handleWillBeClosed}
                      theme="secondary"
                      size="m"
                    >
                      {cancelButtonLabel ?? 'отмена'}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>,
          destinationElement.current,
        )}
    </>
  );
};
