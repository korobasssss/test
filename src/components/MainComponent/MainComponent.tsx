import React, { FC, useCallback, useState } from 'react';
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
import { EPaths } from 'src/modules/components/constants/EPaths';

interface IMainPage {
  isSettingsOpened: boolean;
  actionSettings: (flag: boolean) => void;
}

export const MainComponent: FC<IMainPage> = ({
                                                   isSettingsOpened,
                                                   actionSettings,
                                                 }) => {
  const navigation = useNavigate();

  const [selectArr, setSelectArr] = useState(DeviceStatusSelectWithStatus);

  const handleClickSelect = useCallback((obj: any) => {
    if (obj.active) {
      setSelectArr(obj.data);
    }

  }, []);

  const handleClickNew = useCallback(() => {
    navigation(EPaths.CREATE);
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
                  headerTheme="base" />
        </section>
        <WhiteSection>
          <ScrollWrapper
            className={styles.ul_section}>
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>1</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to={EPaths.PROFILE} className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>2</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to={EPaths.PROFILE} className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>3</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to={EPaths.PROFILE} className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>4</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to={EPaths.PROFILE} className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>5</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to={EPaths.PROFILE} className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
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
};