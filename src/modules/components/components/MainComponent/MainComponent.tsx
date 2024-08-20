import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeviceStatusSelectWithStatus } from 'src/modules/components/constants';
import styles from 'src/modules/components/components/MainComponent/styles.module.scss';
import { Button, ButtonIcon, Input, Select, WhiteSection, ScrollWrapper, PopupDown, TextNoData } from 'src/base/components';
import { DataListComponent } from 'src/modules/components/components';
import { ReactComponent as CloseLogo } from 'src/assets/icons/closeIcon.svg';
import { ReactComponent as SearchLogo } from 'src/assets/icons/search.svg';
import { ReactComponent as RefreshLogo } from 'src/assets/icons/refresh.svg';
import { ReactComponent as AddLogo } from 'src/assets/icons/add.svg';
import { IDataView, ISelectActive } from 'src/modules/components';
import { routeCreate } from 'src/base/navigation/routes';
import { isArray } from 'src/base';
import { SettingsPopupContainer } from 'src/modules/components/containers/SettingsPopupContainer';

interface IMainComponent {
  isSettingsOpened: boolean;
  actionSettings: (flag: boolean) => void;
  data: IDataView[];
  updateData: () => void
}

export const MainComponent: FC<IMainComponent> = ({
                                                    isSettingsOpened,
                                                    actionSettings,
                                                    data,
                                                    updateData
                                                  }) => {
  const navigation = useNavigate();

  const handleClickNew = useCallback(() => {
    navigation(routeCreate.fullPath);
  }, [navigation]);

  const [filteredDataById, setFilteredDataById] = useState(data);

  useEffect(() => {
    setFilteredDataById(data);
  }, [data]);

  const [inputSearch, setInputSearch] = useState('');

  const handleSetValue = useCallback((value: string) => {
    setInputSearch(value);
    setFilteredDataById(data.filter(itemFilter => itemFilter.id.toString().includes(value)));
  }, [data]);

  const handleSearchDevice = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    handleSetValue(event.target.value);
  }, [handleSetValue]);

  const handleClearInputSearch = useCallback(() => {
    handleSetValue('');
  }, [handleSetValue]);

  const [selectArr, setSelectArr] = useState(DeviceStatusSelectWithStatus);

  const handleClickSelect = useCallback((obj: ISelectActive) => {
    if (obj.active) {
      setSelectArr(obj.data);
    }
  }, []);

  return (
    <section className={styles.body}>
      <section className={styles.root_section}>
        <section>
          <WhiteSection>
            <nav className={styles.nav_section}>
              <div className={styles.input_section}>
                <SearchLogo />
                <Input
                  value={inputSearch}
                  onChange={handleSearchDevice}
                  className={styles.input}
                  placeholder="Поиск по deviceID"
                  theme="none"
                />
              </div>
              <ButtonIcon
                onClick={handleClearInputSearch}>
                <CloseLogo />
              </ButtonIcon>
            </nav>
          </WhiteSection>
        </section>
        <section className={styles.status_section}>
          <Button
            className={styles.refresh_button}
            onClick={updateData}
            size="s">
            <div className={styles.rotate}>
              <RefreshLogo />
            </div>
            <div>Обновить список</div>
          </Button>
          <Select
            defaultData={selectArr}
            onChange={handleClickSelect}
            theme="base" />
        </section>
        <WhiteSection>
          <ScrollWrapper
            className={styles.ul_section}>
            {
              filteredDataById && isArray(filteredDataById)
                ?
                <DataListComponent
                  data={filteredDataById}
                  selectValue={selectArr.find(select => select.isActive)?.value} />
                :
                <TextNoData/>
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
          <PopupDown
            topTitle="Выбор окружения"
            setIsOpen={actionSettings}
            handleClosePopup={actionSettings}>
            <SettingsPopupContainer />
          </PopupDown>
          :
          null}
    </section>
  );
};