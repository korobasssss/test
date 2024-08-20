import React, { FC } from 'react';
import { Input, Popup } from 'src/base/components';
import styles from './styles.module.scss';
import { CardInfoItemComponent } from 'src/modules/components/components/CardComponent';
import { IDataOneDeviceView } from 'src/modules/components';

interface ICardPopups {
  data: IDataOneDeviceView
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
    data,
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
          headerTitle={`OmniGhost ${data.id}`}
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
              data={data.coordinates}
            />
            <CardInfoItemComponent
              title="Статус: "
              data={data.status}
            />
            <CardInfoItemComponent
              title="Скорость: "
              data={`${data.speed} км/ч`}
            />
            <CardInfoItemComponent
              title="Уровень заряда: "
              data={`${data.devicePercent} %`}
            />
            <CardInfoItemComponent
              title="Состояние троса: "
              data={data.cableStatus}
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