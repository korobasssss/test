import React, { ReactElement, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { Input } from 'src/base/components';
import checkbox_icon from 'src/assets/icons/checkbox.svg';
import cx from 'classnames';

export const SettingsPopupComponent = (): ReactElement => {
  const [settingsChoose, setSettingsChoose] = useState(0);

  const handleClickSetSettings = useCallback((index: number) => {
    setSettingsChoose(index);
  }, []);

  return (
    <section className={styles.checkbox_section}>
      <div className={styles.list_item}
               onClick={() => handleClickSetSettings(0)}>
        <img src={checkbox_icon} alt="checkbox icon"
             className={cx({
               [styles.hidden]: settingsChoose !== 0,
               [styles.visible]: settingsChoose === 0,
             })} />
        <div className={styles.data}>Тест</div>
      </div>
      <div className={styles.list_item}
               onClick={() => handleClickSetSettings(1)}>
        <img src={checkbox_icon} alt="checkbox icon"
             className={cx({
               [styles.hidden]: settingsChoose !== 1,
               [styles.visible]: settingsChoose === 1,
             })} />
        <div className={styles.data}>Dev</div>
      </div>
      <div className={styles.list_item}
               onClick={() => handleClickSetSettings(2)}>
        <img src={checkbox_icon} alt="checkbox icon"
             className={cx({
               [styles.hidden]: settingsChoose !== 2,
               [styles.visible]: settingsChoose === 2,
             })} />
        <div className={styles.input_section}>
          <div className={styles.data}>Ввести IP вручную</div>
          <Input placeholder="Номер IP"
                 className={styles.input}
                 disabled={settingsChoose !== 2} />
        </div>
      </div>
    </section>
  );
};