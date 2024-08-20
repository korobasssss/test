import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { CableStatusSelect, DeviceStatusSelect } from 'src/modules/components/constants';
import styles from 'src/modules/components/components/CreateOmniGhostComponent/styles.module.scss';
import { Button, Input, Select, WhiteSection } from 'src/base/components';
import { ICreateOmniGhostAction, ISelectActive } from 'src/modules/components';
import { isNumber } from 'src/base/utils';
import { CreateItemComponent } from 'src/modules/components/components';

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
            <CreateItemComponent
              title='DeviceId'
            >
              <Input
                value={inputId}
                onChange={handlerSetId}
                placeholder="Введите Id ..."
                theme="none"
              />
            </CreateItemComponent>
            <CreateItemComponent
              title='Статус устройства'
            >
              <Select
                defaultData={selectArrStatus}
                onChange={handleClickSelectStatus}
                theme="none"
              />
            </CreateItemComponent>
            <CreateItemComponent
              title='Скорость'
            >
              <Input
                value={inputSpeed}
                onChange={handlerSetSpeed}
                placeholder="Введите скорость км/ч ..."
                theme="none"
              />
            </CreateItemComponent>
            <CreateItemComponent
              title='Уровень заряда'
            >
              <Input
                value={inputCharging}
                onChange={handlerSetCharging}
                placeholder="Введите заряд % ..."
                theme="none"
              />
            </CreateItemComponent>
            <CreateItemComponent
              title='Состояние троса'
            >
              <Select
                defaultData={selectArrCondition}
                onChange={handleClickSelectCondition}
                theme="none"
              />
            </CreateItemComponent>
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