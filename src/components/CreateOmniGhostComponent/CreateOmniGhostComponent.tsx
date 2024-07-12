import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { CableStatusSelect, DeviceStatusSelect } from 'src/modules/components/constants';
import styles from 'src/components/CreateOmniGhostComponent/styles.module.scss';
import { WhiteSection } from 'src/base/components/WhiteSection';
import { Button, Input, Select } from 'src/base/components';
import { ISelectActive } from 'src/modules/components';

export const CreateOmniGhostComponent: FC = () => {
  const [inputId, setInputId] = useState('');
  const [inputSpeed, setInputSpeed] = useState('');
  const [inputCharging, setInputCharging] = useState('');

  const handlerSetId = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputId(event.target.value);
  }, []);

  const handlerSetSpeed = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputSpeed(event.target.value);
  }, []);

  const handlerSetCharging = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputCharging(event.target.value);
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
                <Select label="Online" defaultData={selectArrStatus}
                        onChange={handleClickSelectStatus}
                        theme="none" />
              </div>
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Скорость
              </header>
              <Input value={inputSpeed}
                     onChange={handlerSetSpeed}
                     placeholder="Введите скорость км/ч ..."
                     className={styles.input} />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Уровень заряда
              </header>
              <Input value={inputCharging}
                     onChange={handlerSetCharging}
                     placeholder="Введите заряд % ..."
                     className={styles.input} />
            </div>
            <div className={styles.list_item}>
              <header className={styles.header}>
                Состояние троса
              </header>
              <section>
                <Select label="Отстегнут" defaultData={selectArrCondition}
                        onChange={handleClickSelectCondition}
                        theme="none" />
              </section>
            </div>
          </section>
          <Button
            theme="primary"
            size="l"
          >
            <div>Создать</div>
          </Button>
        </main>
      </WhiteSection>
    </section>
  );
};