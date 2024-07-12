import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DeviceStatusSelectWithStatus } from 'src/modules/components/constants';
import styles from 'src/components/MainComponent/styles.module.scss';
import { WhiteSection } from 'src/base/components/WhiteSection';
import { Button, ButtonIcon, Input, Select } from 'src/base/components';
import { ScrollWrapper } from 'src/base/components/ScrollWrapper';
import { PopupDown } from 'src/base/components/PopupDown';
import { SettingsPopupComponent } from 'src/components/SettingsPopupComponent';
import { ReactComponent as CloseLogo } from 'src/assets/icons/closeIcon.svg';
import { ReactComponent as SearchLogo } from 'src/assets/icons/search.svg';
import { ReactComponent as RefreshLogo } from 'src/assets/icons/refresh.svg';
import { ReactComponent as AddLogo } from 'src/assets/icons/add.svg';

import { observer } from 'mobx-react';
import { dataStore } from 'src/modules/components/store/dataStore';
import cx from 'classnames';
import { EDataStatus } from 'src/modules/components/constants/EDataStatus';
import { ISelectActive } from 'src/modules/components';
import { routeCreate } from 'src/base/navigation/routes/create';
import { routeComponentsView } from 'src/base/navigation';

interface IMainPage {
  isSettingsOpened: boolean;
  actionSettings: (flag: boolean) => void;
}

export const MainComponent: FC<IMainPage> = observer(({
                                                        isSettingsOpened,
                                                        actionSettings,
                                                      }) => {
  const navigation = useNavigate();

  const { data } = dataStore;

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const [selectArr, setSelectArr] = useState(DeviceStatusSelectWithStatus);

  const handleClickSelect = useCallback((obj: ISelectActive) => {
    if (obj.active) {
      setSelectArr(obj.data);

      obj.data.map(selectItem => {
        if (selectItem.isActive) {
          switch (selectItem.value) {
            case EDataStatus.ONLINE: {
              setFilteredData([...data].filter(item => item.status === EDataStatus.ONLINE));
              break;
            }

            case EDataStatus.OFFLINE: {
              setFilteredData([...data].filter(item => item.status === EDataStatus.OFFLINE));
              break;
            }

            default: {
              setFilteredData([...data]);
            }
          }
        }
      });
    }

  }, [data]);

  const handleClickNew = useCallback(() => {
    navigation(routeCreate.fullPath);
  }, [navigation]);

  return (
    <section className={styles.body}>
      <section className={styles.root_section}>
        <section>
          <WhiteSection>
            <nav className={styles.nav_section}>
              <div className={styles.input_section}>
                <SearchLogo />
                <Input className={styles.input}
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
              filteredData?.map((item, index) => (
                <li key={index} className={styles.ul_section}>
                  <div className={styles.list_item}>
                    <div className={styles.id_section}>
                      <div className={styles.num}>{index + 1}</div>
                      <div className={styles.data}>{item.id}</div>
                    </div>
                    <Link to={routeComponentsView.url({ id: item.id })} className={styles.status_button}>
                      <div>{item.status}</div>
                      <div className={cx({
                        [styles.online]: item.status === EDataStatus.ONLINE,
                        [styles.offline]: item.status === EDataStatus.OFFLINE,
                      })} />
                    </Link>
                  </div>
                  {index !== filteredData?.length - 1 ?
                    <span className={styles.ul_border} />
                    : null}
                </li>
              ))
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