import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { CableStatusSelect, DeviceStatusSelect } from 'src/modules/components/constants';
import styles from 'src/modules/components/components/CreateOmniGhostComponent/styles.module.scss';
import { Button, Input, Select, WhiteSection } from 'src/base/components';
import { ICreateOmniGhostAction, ISelectActive } from 'src/modules/components';
import { isNumber } from 'src/base/utils';

interface ICreateOmniGhostComponentProps {
  handlerCreate: (data: ICreateOmniGhostAction) => void;
}

export const CreateOmniGhostComponent: FC<ICreateOmniGhostComponentProps> = ({
                                                                               handlerCreate,
                                                                             }) => {
  const [inputId, setInputId] = useState('');
  const [inputSpeed, setInputSpeed] = useState('');
  const [inputCharging, setInputCharging] = useState('');

  const handlerSetId = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputId(event.target.value);
  }, []);

  const handlerSetSpeed = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '' ||
      isNumber(event.target.value) && Number.parseInt(event.target.value, 10) <= 100) {
      setInputSpeed(event.target.value);
    }
  }, []);

  const handlerSetCharging = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '' ||
      isNumber(event.target.value) && Number.parseInt(event.target.value, 10) <= 100) {
      setInputCharging(event.target.value);
    }
  }, []);

  const [selectArrStatus, setSelectArrStatus] = useState(DeviceStatusSelect);

  const handleClickSelectStatus = useCallback((obj: ISelectActive) => {
    if (obj.active) {
      setSelectArrStatus(obj.data);
    }
  }, []);

  const [selectArrCondition, setSelectArrCondition] = useState(CableStatusSelect);

  const handleClickSelectCondition = useCallback((obj: ISelectActive) => {
    if (obj.active) {
      setSelectArrCondition(obj.data);
    }
  }, []);

  const createOmniGhostUi = useCallback(() => {
    if (inputId !== '' && inputSpeed && inputCharging)
      handlerCreate({
        deviceId: inputId,
        status: selectArrStatus.find(item => item.isActive)?.value as string,
        speed: inputSpeed,
        devicePercent: inputCharging,
        cableStatus: selectArrCondition.find(item => item.isActive)?.value as string,
      });
  }, [handlerCreate, inputCharging, inputId, inputSpeed, selectArrCondition, selectArrStatus]);

  return (
    <section className={styles.root_section}>
      <WhiteSection>
        <main className={styles.main_section}>
          <section className={styles.ul_section}>
            <div className={styles.list_item}>
              <header className={styles.header}>
                DeviceId
              </header>
              <Input
                value={inputId}
                onChange={handlerSetId}
                placeholder="Введите Id ..."
                className={styles.input}
              />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Статус устройства
              </header>
              <div>
                <Select
                  defaultData={selectArrStatus}
                  onChange={handleClickSelectStatus}
                  theme="none"
                />
              </div>
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Скорость
              </header>
              <Input
                value={inputSpeed}
                onChange={handlerSetSpeed}
                placeholder="Введите скорость км/ч ..."
                className={styles.input}
              />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Уровень заряда
              </header>
              <Input
                value={inputCharging}
                onChange={handlerSetCharging}
                placeholder="Введите заряд % ..."
                className={styles.input}
              />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Состояние троса
              </header>
              <section>
                <Select
                  defaultData={selectArrCondition}
                  onChange={handleClickSelectCondition}
                  theme="none"
                />
              </section>
            </div>
          </section>
          <Button
            theme="primary"
            size="l"
            onClick={createOmniGhostUi}
            disabled={!inputId || !inputSpeed || !inputCharging}
          >
            <div>Создать</div>
          </Button>
        </main>
      </WhiteSection>
    </section>
  );
};