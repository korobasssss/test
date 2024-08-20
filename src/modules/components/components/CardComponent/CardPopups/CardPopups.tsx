import React, { FC } from 'react';
import { Input, Popup } from 'src/base/components';
import styles from './styles.module.scss';
import { CardInfoItemComponent } from 'src/modules/components/components/CardComponent';

interface ICardPopups {
  allInfoFlag: boolean;
  statusFlag: boolean;
  speedFlag: boolean;
  batteryFlag: boolean;
  handlerOpenInfoPopup: () => void;
  handlerOpenStatusPopup: () => void;
  handlerOpenSpeedPopup: () => void;
  handlerOpenBatteryPopup: () => void;
  handleClickSubmit: () => void;
}

export const CardPopups: FC<ICardPopups> = (
  {
    allInfoFlag,
    statusFlag,
    speedFlag,
    batteryFlag,
    handlerOpenInfoPopup,
    handlerOpenStatusPopup,
    handlerOpenSpeedPopup,
    handlerOpenBatteryPopup,
    handleClickSubmit,
  },
) => {
  return (
    <>
      {allInfoFlag && (
        <Popup
          headerTitle="OmniGhost 55478"
          isOpen={allInfoFlag}
          handleClosePopup={handlerOpenInfoPopup}
          isCancelButton
          handleClickSubmit={handleClickSubmit}
          handleCancelButtonClick={handlerOpenInfoPopup}
          submitButtonLabel="Скопировать в буфер"
          cancelButtonLabel="Закрыть"
        >
          <div
            className={styles.popup_info}>
            <CardInfoItemComponent
              title="Координаты: "
              data="55.761811, 37.610116"
            />
            <CardInfoItemComponent
              title="Статус: "
              data="Доступен"
            />
            <CardInfoItemComponent
              title="Скорость: "
              data="15 км/ч"
            />
            <CardInfoItemComponent
              title="Уровень заряда: "
              data="47%"
            />
            <CardInfoItemComponent
              title="Состояние троса: "
              data="Отстёгнут"
            />
          </div>
        </Popup>
      )}
      {statusFlag && (
        <Popup
          headerTitle="Статус устройства"
          isOpen={statusFlag}
          handleClosePopup={handlerOpenStatusPopup}
          isCancelButton
          handleClickSubmit={handleClickSubmit}
          submitButtonLabel="Применить"
        >
          <Input
            theme="base"
            placeholder="Введите новый статус"
          />
        </Popup>
      )}
      {speedFlag && (
        <Popup
          headerTitle="Скорость движения"
          isOpen={speedFlag}
          handleClosePopup={handlerOpenSpeedPopup}
          isCancelButton
          handleClickSubmit={handleClickSubmit}
          submitButtonLabel="Применить"
        >
          <Input
            theme="base"
            placeholder="Введите скорость"
            type="number"
            min={0}
          />
        </Popup>
      )}
      {batteryFlag && (
        <Popup
          headerTitle="Уровень заряда батареи"
          isOpen={batteryFlag}
          handleClosePopup={handlerOpenBatteryPopup}
          isCancelButton
          handleClickSubmit={handleClickSubmit}
          submitButtonLabel="Применить"
        >
          <Input
            theme="base"
            placeholder="Введите уровень заряда"
            type="number"
            min={0}
            max={100}
          />
        </Popup>
      )}
    </>
  );
};