import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { CableStatusSelect, DeviceStatusSelect } from 'src/modules/components/constants';
import styles from 'src/components/CreateOmniGhostComponent/styles.module.scss';
import { WhiteSection } from 'src/base/components/WhiteSection';
import { Button, Input, Select } from 'src/base/components';
import { ISelectActive } from 'src/modules/components';
import { dataStore } from 'src/modules/components/store';
import { observer } from 'mobx-react';

export const CreateOmniGhostComponent: FC = observer(() => {
  const [inputId, setInputId] = useState('');
  const [inputSpeed, setInputSpeed] = useState<number>();
  const [inputCharging, setInputCharging] = useState<number>();

  const handlerSetId = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputId(event.target.value);
  }, []);

  const handlerSetSpeed = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputSpeed(Number.parseInt(event.target.value, 10));
  }, []);

  const handlerSetCharging = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputCharging(Number.parseInt(event.target.value, 10));
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
    dataStore.createOmniGhostUi(
      inputId,
      selectArrStatus.find(item => item.isActive)?.value,
      inputSpeed,
      inputCharging,
      selectArrCondition.find(item => item.isActive)?.value,
    );
  }, [inputCharging, inputId, inputSpeed, selectArrCondition, selectArrStatus]);

  return (
    <section className={styles.root_section}>
      <WhiteSection>
        <main className={styles.main_section}>
          <section className={styles.ul_section}>
            <div className={styles.list_item}>
              <header className={styles.header}>
                DeviceId
              </header>
              <Input value={inputId}
                     onChange={handlerSetId}
                     placeholder="Введите Id ..."
                     className={styles.input} />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Статус устройства
              </header>
              <div>
                <Select defaultData={selectArrStatus}
                        onChange={handleClickSelectStatus}
                        theme="none" />
              </div>
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Скорость
              </header>
              <Input type='number'
                     min={0}
                     value={inputSpeed}
                     onChange={handlerSetSpeed}
                     placeholder="Введите скорость км/ч ..."
                     className={styles.input} />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Уровень заряда
              </header>
              <Input type='number'
                     min={0}
                     value={inputCharging}
                     onChange={handlerSetCharging}
                     placeholder="Введите заряд % ..."
                     className={styles.input} />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Состояние троса
              </header>
              <section>
                <Select defaultData={selectArrCondition}
                        onChange={handleClickSelectCondition}
                        theme="none" />
              </section>
            </div>
          </section>
          <Button
            theme="primary"
            size="l"
            onClick={createOmniGhostUi}
            disabled={inputId === '' || !inputSpeed  || !inputCharging}
          >
            <div>Создать</div>
          </Button>
        </main>
      </WhiteSection>
    </section>
  );
});