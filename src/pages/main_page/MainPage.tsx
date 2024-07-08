import React, { FC, ReactElement, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as CloseLogo } from 'src/assets/icons/closeIcon.svg';
import { ReactComponent as SearchLogo } from 'src/assets/icons/search.svg';
import { ReactComponent as RefreshLogo } from 'src/assets/icons/refresh.svg';
import { ReactComponent as SettingsLogo } from 'src/assets/icons/settings.svg';
import { ReactComponent as AddLogo } from 'src/assets/icons/add.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonIcon, Input, ISelectDefaultData, MainLayout, Select } from 'src/base/components';
import { SettingsModalWindow } from 'src/pages/main_page/settings/SettingsModalWindow';
import { PopupDown } from 'src/base/components/PopupDown';
import { WhiteSection } from 'src/base/components/WhiteSection';
import cx from 'classnames';

interface IMainPage {
  isSettingsOpened: boolean
  actionSettings: (flag: boolean) => void
}

export const MainPageComponent: FC<IMainPage> = ({
                                             isSettingsOpened,
                                             actionSettings
                                           }) => {
  const navigation = useNavigate();

  const SelectDataArr: ISelectDefaultData[] = [
    {
      id: 0,
      value: 'Статус',
      isActive: true,
    },
    {
      id: 1,
      value: 'Online',
      isActive: false,
    },
    {
      id: 2,
      value: 'Offline',
      isActive: false,
    },
  ];

  const [selectArr, setSelectArr] = useState(SelectDataArr);

  const handleClickSelect = useCallback((obj: any) => {
    if (obj.active) {
      setSelectArr(obj.data);
    }

  }, []);

  const handleClickNew = useCallback(() => {
    navigation('/create');
  }, [navigation]);

  return (
    <section className={styles.body}>
      <section className={styles.root_section}>
        <section>
            {/* eslint-disable-next-line react/no-children-prop */}
            <WhiteSection children={
              <nav className={styles.nav_section}>
                <section className={styles.input_section}>
                  <SearchLogo />
                  <Input className={styles.input_section_input}
                         placeholder="Поиск по deviceID" />
                </section>
                <ButtonIcon>
                  <CloseLogo />
                </ButtonIcon>
              </nav>
            } />
        </section>
        <section className={styles.status_section}>
          <Button
            className={styles.refresh_button}
            size="s">
            <section className={styles.rotate}>
              <RefreshLogo />
            </section>
            <section>Обновить список</section>
          </Button>
          <Select defaultData={selectArr}
                  onChange={handleClickSelect}
                  headerTheme="base" />
        </section>
        {/* eslint-disable-next-line react/no-children-prop */}
        <WhiteSection children={
          <ul className={cx(styles.ul_section, 'scroll_wrapper')}>
            <li className={styles.ul_one_velobike}>
              <section className={styles.ul_one_velobike_id_section}>
                <section className={styles.ul_one_velobike_id_section_num}>1</section>
                <section className={styles.ul_one_velobike_id_section_data}>32547</section>
              </section>
              <Link to="/omni-card" className={styles.ul_one_velobike_status_button}>
                <section>Online</section>
                <section className={styles.velobike_online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.ul_one_velobike}>
              <section className={styles.ul_one_velobike_id_section}>
                <section className={styles.ul_one_velobike_id_section_num}>2</section>
                <section className={styles.ul_one_velobike_id_section_data}>32547</section>
              </section>
              <Link to="/omni-card" className={styles.ul_one_velobike_status_button}>
                <section>Online</section>
                <section className={styles.velobike_online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.ul_one_velobike}>
              <section className={styles.ul_one_velobike_id_section}>
                <section className={styles.ul_one_velobike_id_section_num}>3</section>
                <section className={styles.ul_one_velobike_id_section_data}>32547</section>
              </section>
              <Link to="/omni-card" className={styles.ul_one_velobike_status_button}>
                <section>Online</section>
                <section className={styles.velobike_online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.ul_one_velobike}>
              <section className={styles.ul_one_velobike_id_section}>
                <section className={styles.ul_one_velobike_id_section_num}>4</section>
                <section className={styles.ul_one_velobike_id_section_data}>32547</section>
              </section>
              <Link to="/omni-card" className={styles.ul_one_velobike_status_button}>
                <section>Online</section>
                <section className={styles.velobike_online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.ul_one_velobike}>
              <section className={styles.ul_one_velobike_id_section}>
                <section className={styles.ul_one_velobike_id_section_num}>5</section>
                <section className={styles.ul_one_velobike_id_section_data}>32547</section>
              </section>
              <Link to="/omni-card" className={styles.ul_one_velobike_status_button}>
                <section>Online</section>
                <section className={styles.velobike_online} />
              </Link>
            </li>
          </ul>
        } />
        <footer className={styles.footer_button_section}>
          <Button
            className={styles.button_with_icon}
            onClick={handleClickNew}
            theme="secondary"
            size="l"
          >
            <AddLogo />
            <section>Создать новый OmniGhost</section>
          </Button>
        </footer>
      </section>
      {
        isSettingsOpened ?
          // eslint-disable-next-line react/no-children-prop
          <PopupDown topTitle="Выбор окружения" setIsOpen={actionSettings} children={<SettingsModalWindow />}
                     submitButtonLabel="Готово"
                     handleClosePopup={actionSettings} />
          :
          null}
    </section>
  );
};

export const MainPage = (): ReactElement => {
  const [isSettingsOpened, setIsSettingsOpened] = useState(false);

  const handleClickSettings = useCallback(() => {
    setIsSettingsOpened(!isSettingsOpened);
  }, [isSettingsOpened]);

  return (
    <MainLayout
      topTitle="Тест"
      rightTopIcon={{
        svg: <SettingsLogo />,
        clicked: () => handleClickSettings(),
      }}
      /* eslint-disable-next-line react/no-children-prop */
      children={
        <MainPageComponent
          isSettingsOpened={isSettingsOpened}
          actionSettings={setIsSettingsOpened}
        />}
      withBottomNavigation={false}
    />
  );
};