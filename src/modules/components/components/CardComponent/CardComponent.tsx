import React, { FC, useCallback, useState } from 'react';
import { WhiteSection } from 'src/base/components';
import {ReactComponent as Battery50Icon} from 'src/assets/icons/battery50.svg';
import {ReactComponent as LockIcon} from 'src/assets/icons/lock.svg';
import {ReactComponent as WheelIcon} from 'src/assets/icons/wheel.svg';
import { CardItemComponent, CardPopups } from 'src/modules/components/components/CardComponent';

interface ICardComponentProps {
  isDeletePopupOpen: boolean;
  handleOpenDeleteCardPopup: () => void;
}

export const CardComponent: FC<ICardComponentProps> = () => {
  const [allInfoPopup, setAllInfoPopup] = useState(false);

  const handlerOpenInfoPopup = useCallback(() => {
    setAllInfoPopup(!allInfoPopup);
  }, [allInfoPopup]);

  const [statusPopup, setStatusPopup] = useState(false);

  const handlerOpenStatusPopup = useCallback(() => {
    setStatusPopup(!statusPopup);
  }, [statusPopup]);

  const [speedPopup, setSpeedPopup] = useState(false);

  const handlerOpenSpeedPopup = useCallback(() => {
    setSpeedPopup(!speedPopup);
  }, [speedPopup]);

  const [batteryPopup, setBatteryPopup] = useState(false);

  const handlerOpenBatteryPopup = useCallback(() => {
    setBatteryPopup(!batteryPopup);
  }, [batteryPopup]);

  const handleClickSubmit = useCallback(() => {
    console.log('click submit');
  }, []);

  return (
    <WhiteSection>
      <CardItemComponent
        data='55.761811, 37.610116'
        title='координаты'
        buttonType='secondary'
        buttonTitle='Вся информация'
        handlerButtonClick={handlerOpenInfoPopup}
        isLastItem={false}
      />
      <CardItemComponent
        data='Online'
        title='статус устройства'
        buttonType='svg'
        handlerButtonClick={handlerOpenStatusPopup}
        isLastItem={false}
      />
      <CardItemComponent
        data='15 км/ч'
        title='скорость движения'
        buttonType='svg'
        handlerButtonClick={handlerOpenSpeedPopup}
        isLastItem={false}
      />
      <CardItemComponent
        data='47%'
        dataIcon={<Battery50Icon/>}
        title='уровень заряда батареи'
        buttonType='svg'
        handlerButtonClick={handlerOpenBatteryPopup}
        isLastItem={false}
      />
      <CardItemComponent
        data='Отстёгнут'
        title='состояние троса'
        buttonType='secondary'
        buttonTitle='Замок троса'
        buttonIcon={<LockIcon/>}
        isLastItem={false}
      />
      <CardItemComponent
        data='Открыт'
        title='состояние замка-подковы'
        buttonType='secondary'
        buttonTitle='Замок на колесе'
        buttonIcon={<WheelIcon/>}
        isLastItem={false}
      />
      <CardItemComponent
        data='H0 Interval'
        buttonType='svg'
        isLastItem={false}
      />
      <CardItemComponent
        data='0 Interval'
        buttonType='svg'
        isLastItem
      />
      <CardPopups
        allInfoFlag={allInfoPopup}
        statusFlag={statusPopup}
        speedFlag={speedPopup}
        batteryFlag={batteryPopup}
        handlerOpenInfoPopup={handlerOpenInfoPopup}
        handlerOpenStatusPopup={handlerOpenStatusPopup}
        handlerOpenSpeedPopup={handlerOpenSpeedPopup}
        handlerOpenBatteryPopup={handlerOpenBatteryPopup}
        handleClickSubmit={handleClickSubmit}
      />
    </WhiteSection>
  );
};