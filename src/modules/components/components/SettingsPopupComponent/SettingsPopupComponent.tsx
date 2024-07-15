import React, { ReactElement, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { Checkbox, Input } from 'src/base/components';
import { ReactComponent as CheckboxLogo } from 'src/assets/icons/checkbox.svg';

export const SettingsPopupComponent = (): ReactElement => {
  const [settingsChoose, setSettingsChoose] = useState(0);

  const handleClickSetSettings = useCallback((index: number) => {
    setSettingsChoose(index);
  }, []);

  return (
    <section className={styles.checkbox_section}>
      <div className={styles.list_item}
           onClick={() => handleClickSetSettings(0)}>
        <Checkbox
          value={settingsChoose === 0}
          svg={<CheckboxLogo />}
          name="test"
          className={styles.checkbox} />
        <div className={styles.data}>Тест</div>
      </div>
      <div className={styles.list_item}
           onClick={() => handleClickSetSettings(1)}>
        <Checkbox
          value={settingsChoose === 1}
          svg={<CheckboxLogo />}
          name="dev"
          className={styles.checkbox} />
        <div className={styles.data}>Dev</div>
      </div>
      <div className={styles.list_item}
           onClick={() => handleClickSetSettings(2)}>
        <Checkbox
          value={settingsChoose === 2}
          svg={<CheckboxLogo />}
          name="ip"
          className={styles.checkbox} />
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