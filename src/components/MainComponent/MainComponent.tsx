import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DeviceStatusSelectWithStatus } from 'src/modules/components/constants';
import styles from 'src/components/MainComponent/styles.module.scss';
import { Button, ButtonIcon, Input, Select, WhiteSection, ScrollWrapper, PopupDown } from 'src/base/components';
import { SettingsPopupComponent } from 'src/components/SettingsPopupComponent';
import { ReactComponent as CloseLogo } from 'src/assets/icons/closeIcon.svg';
import { ReactComponent as SearchLogo } from 'src/assets/icons/search.svg';
import { ReactComponent as RefreshLogo } from 'src/assets/icons/refresh.svg';
import { ReactComponent as AddLogo } from 'src/assets/icons/add.svg';
import { observer } from 'mobx-react';
import { dataStore } from 'src/modules/components/store/dataStore';
import cx from 'classnames';
import { ISelectActive, EDeviceStatus } from 'src/modules/components';
import { routeCreate } from 'src/base/navigation/routes/create';
import { routeComponentsView } from 'src/base/navigation';
import { isArray } from 'src/base';

interface IMainPage {
  isSettingsOpened: boolean;
  actionSettings: (flag: boolean) => void;
}

export const MainComponent: FC<IMainPage> = observer(({
                                                        isSettingsOpened,
                                                        actionSettings,
                                                      }) => {
  const navigation = useNavigate();

  const handleClickNew = useCallback(() => {
    navigation(routeCreate.fullPath);
  }, [navigation]);

  const { data } = dataStore;

  useEffect(() => {
    dataStore.getData();
  }, []);

  const [filteredDataById, setFilteredDataById] = useState(data);

  useEffect(() => {
    setFilteredDataById(data);
  }, [data]);

  const [inputSearch, setInputSearch] = useState('');

  const handleSearchDevice = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
    setFilteredDataById([...data].filter(itemFilter => itemFilter.id.toString().includes(event.target.value)));
  }, [data]);

  const [selectArr, setSelectArr] = useState(DeviceStatusSelectWithStatus);

  const handleClickSelect = useCallback((obj: ISelectActive) => {
    if (obj.active) {
      setSelectArr(obj.data);
    }

  }, []);

  const [filteredDataByStatus, setFilteredDataByStatus] = useState(filteredDataById);

  useEffect(() => {
    if (!selectArr[0].isActive) {
      setFilteredDataByStatus([...filteredDataById].filter(itemFilter => itemFilter.status === selectArr.find(select => select.isActive)?.value));
    } else {
      setFilteredDataByStatus([...filteredDataById])
    }
  }, [filteredDataById, selectArr]);

  return (
    <section className={styles.body}>
      <section className={styles.root_section}>
        <section>
          <WhiteSection>
            <nav className={styles.nav_section}>
              <div className={styles.input_section}>
                <SearchLogo />
                <Input value={inputSearch}
                       onChange={handleSearchDevice}
                       className={styles.input}
                       placeholder="Поиск по deviceID" />
              </div>
              <ButtonIcon>
                <CloseLogo />
              </ButtonIcon>
            </nav>
          </WhiteSection>
        </section>
        <section className={styles.status_section}>
          <Button
            className={styles.refresh_button}
            size="s">
            <div className={styles.rotate}>
              <RefreshLogo />
            </div>
            <div>Обновить список</div>
          </Button>
          <Select defaultData={selectArr}
                  onChange={handleClickSelect}
                  theme="base" />
        </section>
        <WhiteSection>
          <ScrollWrapper
            className={styles.ul_section}>
            {
              isArray(filteredDataByStatus) ?
                filteredDataByStatus.map((itemMap, index) => (
                  <li key={itemMap.id} className={styles.ul_section}>
                    <div className={styles.list_item}>
                      <div className={styles.id_section}>
                        <div className={styles.num}>{index + 1}</div>
                        <div className={styles.data}>{itemMap.id}</div>
                      </div>
                      <Link to={routeComponentsView.url({ id: itemMap.id })} className={styles.status_button}>
                        <div>{itemMap.status}</div>
                        <div className={cx({
                          [styles.online]: itemMap.status === EDeviceStatus.ONLINE,
                          [styles.offline]: itemMap.status === EDeviceStatus.OFFLINE,
                        })} />
                      </Link>
                    </div>
                    {
                      index !== filteredDataByStatus.length - 1 ?
                        <span className={styles.ul_border} />
                        : null}
                  </li>
                ))
                :
                <h2 className={styles.message}>Нет данных</h2>
            }
          </ScrollWrapper>
        </WhiteSection>
        <footer className={styles.footer}>
          <Button
            className={styles.button_with_icon}
            onClick={handleClickNew}
            theme="secondary"
            size="l"
          >
            <AddLogo />
            <div>Создать новый OmniGhost</div>
          </Button>
        </footer>
      </section>
      {
        isSettingsOpened ?
          <PopupDown topTitle="Выбор окружения" setIsOpen={actionSettings}
                     submitButtonLabel="Готово"
                     handleClosePopup={actionSettings}>
            <SettingsPopupComponent />
          </PopupDown>
          :
          null}
    </section>
  );
});