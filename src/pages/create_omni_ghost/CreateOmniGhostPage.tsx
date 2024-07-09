import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { Button, Input, MainLayout, Select } from 'src/base/components';
import { WhiteSection } from 'src/base/components/WhiteSection';
import { DeviceStatusSelect, CableStatusSelect, ISelectActive } from 'src/modules/components/constants';

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
            <section className={styles.list_item}>
              <header className={styles.header}>
                DeviceId
              </header>
              <Input value={inputId}
                     onChange={handlerSetId}
                     placeholder="Введите Id ..."
                     className={styles.input} />
            </section>
            <section className={styles.list_item}>
              <header className={styles.header}>
                Статус устройства
              </header>
              <section>
                <Select label="Online" defaultData={selectArrStatus}
                        onChange={handleClickSelectStatus}
                        headerTheme="none" />
              </section>
            </section>
            <section className={styles.list_item}>
              <header className={styles.header}>
                Скорость
              </header>
              <Input value={inputSpeed}
                     onChange={handlerSetSpeed}
                     placeholder="Введите скорость км/ч ..."
                     className={styles.input} />
            </section>
            <section className={styles.list_item}>
              <header className={styles.header}>
                Уровень заряда
              </header>
              <Input value={inputCharging}
                     onChange={handlerSetCharging}
                     placeholder="Введите заряд % ..."
                     className={styles.input} />
            </section>
            <section className={styles.list_item}>
              <header className={styles.header}>
                Состояние троса
              </header>
              <section>
                <Select label="Отстегнут" defaultData={selectArrCondition}
                        onChange={handleClickSelectCondition}
                        headerTheme="none" />
              </section>
            </section>
          </section>
          <Button
            theme="primary"
            size='l'
          >
            <section>Создать</section>
          </Button>
        </main>
      </WhiteSection>
    </section>
  );
};

export const CreateOmniGhostPage : FC = () => {

  const navigation = useNavigate();

  const handleClickCreate = useCallback(() => {
    navigation('/main');
  }, [navigation]);

  return <MainLayout
    topTitle="Новый OmniGhost"
    leftTopIcon={{
      svg: <BackLogo />,
      clicked: () => handleClickCreate(),
    }}
    withBottomNavigation={false}
  >
    <CreateOmniGhostComponent />
  </MainLayout>;
};