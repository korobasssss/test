import styles from './styles.module.scss';
import { Button, ButtonIcon, ListWithLineWrapper } from 'src/base/components';
import React, { FC } from 'react';
import { IWithClassName } from 'src/base/types';
import { ReactComponent as ArrowIcon } from 'src/assets/icons/closed.svg';

interface ICardComponentProps
  extends IWithClassName {
  data: string;
  dataIcon?: JSX.Element;
  title?: string;
  buttonType: 'secondary' | 'svg';
  buttonTitle?: string;
  buttonIcon?: JSX.Element;
  isLastItem: boolean;
  handlerButtonClick?: () => void
}

export const CardItemComponent: FC<ICardComponentProps> = (
  {
    data,
    dataIcon,
    title,
    buttonType,
    buttonTitle,
    buttonIcon,
    isLastItem,
    handlerButtonClick
  },
) => {
  return (
    <ListWithLineWrapper
      isLastItem={isLastItem}
      margin="big">
      <div className={styles.list_item}>
        <div className={styles.item_data_wrapper}>
          <div className={styles.main_data_wrapper}>
            {dataIcon}
            <div className={styles.main_data}>
              {data}
            </div>
          </div>
          <div className={styles.title_wrapper}>
            {title}
          </div>
        </div>
        <div className={styles.item_button_wrapper}>
          {buttonType === 'secondary'
            ?
            <Button
              onClick={handlerButtonClick}
              className={styles.button}
              theme="secondary"
              size="m"
            >
              {buttonIcon}
              <div>
                {buttonTitle}
              </div>
            </Button>
            :
            <ButtonIcon
              onClick={handlerButtonClick}
              className={styles.arrow}>
              <ArrowIcon />
            </ButtonIcon>
          }
        </div>
      </div>
    </ListWithLineWrapper>
  );
};