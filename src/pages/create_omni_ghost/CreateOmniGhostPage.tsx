import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { Button, Input, ISelectDefaultData, MainLayout, Select } from 'src/base/components';
import { WhiteSection } from 'src/base/components/WhiteSection';

export const CreateOmniGhostComponent = (): ReactElement => {
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


  const SelectDataArrStatus: ISelectDefaultData[] = [
    {
      id: 0,
      value: 'Online',
      isActive: true,
    },
    {
      id: 1,
      value: 'Offline',
      isActive: false,
    },
  ];

  const [selectArrStatus, setSelectArrStatus] = useState(SelectDataArrStatus);

  const handleClickSelectStatus = useCallback((obj: any) => {
    if (obj.active) {
      setSelectArrStatus(obj.data);
    }

  }, []);


  const SelectDataArrCondition: ISelectDefaultData[] = [
    {
      id: 0,
      value: 'Отстегнут',
      isActive: true,
    },
    {
      id: 1,
      value: 'Пристегнут',
      isActive: false,
    },
  ];

  const [selectArrCondition, setSelectArrCondition] = useState(SelectDataArrCondition);

  const handleClickSelectCondition = useCallback((obj: any) => {
    if (obj.active) {
      setSelectArrCondition(obj.data);
    }

  }, []);


  return (
    <section className={styles.root_section}>
      <WhiteSection
        /* eslint-disable-next-line react/no-children-prop */
        children={
          <main className={styles.main_section}>
            <section className={styles.ul_section}>
              <section className={styles.ul_section_li}>
                <header className={styles.ul_section_li_header}>
                  DeviceId
                </header>
                <Input value={inputId}
                       onChange={handlerSetId}
                       placeholder="Введите Id ..."
                       className={styles.ul_section_li_input} />
              </section>
              <section className={styles.ul_section_li}>
                <header className={styles.ul_section_li_header}>
                  Статус устройства
                </header>
                <section className={styles.ul_section_li_select_section}>
                  <Select label="Online" defaultData={selectArrStatus}
                          className={styles.ul_section_li_select_section}
                          onChange={handleClickSelectStatus}
                          headerTheme="none" />
                </section>
              </section>
              <section className={styles.ul_section_li}>
                <header className={styles.ul_section_li_header}>
                  Скорость
                </header>
                <Input value={inputSpeed}
                       onChange={handlerSetSpeed}
                       placeholder="Введите скорость км/ч ..."
                       className={styles.ul_section_li_input} />
              </section>
              <section className={styles.ul_section_li}>
                <header className={styles.ul_section_li_header}>
                  Уровень заряда
                </header>
                <Input value={inputCharging}
                       onChange={handlerSetCharging}
                       placeholder="Введите заряд % ..."
                       className={styles.ul_section_li_input} />
              </section>
              <section className={styles.ul_section_li}>
                <header className={styles.ul_section_li_header}>
                  Состояние троса
                </header>
                <section className={styles.ul_section_li_select_section}>
                  <Select label="Отстегнут" defaultData={selectArrCondition}
                          className={styles.ul_section_li_select_section}
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
        } />
    </section>
  );
};

export const CreateOmniGhostPage = (): ReactElement => {

  const navigation = useNavigate();

  const handleClickCreate = useCallback(() => {
    navigation('/main');
  }, [navigation]);

  // eslint-disable-next-line react/no-children-prop
  return <MainLayout
    topTitle="Новый OmniGhost"
    leftTopIcon={{
      svg: <BackLogo />,
      clicked: () => handleClickCreate(),
    }}
    /* eslint-disable-next-line react/no-children-prop */
    children={
      <CreateOmniGhostComponent />}
    withBottomNavigation={false}
  />;
};