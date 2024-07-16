import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { Button, Checkbox, Input } from 'src/base/components';
import { ReactComponent as CheckboxLogo } from 'src/assets/icons/checkbox.svg';

interface ISettingsPopupComponentProps {
  handleSetEnvironment: (data: string) => void;
}

export const SettingsPopupComponent: FC<ISettingsPopupComponentProps> = ({
                                                                           handleSetEnvironment
                                                                         }) => {
  const [settingsChoose, setSettingsChoose] = useState('test');
  const [inputId, setInputId] = useState('');

  const handleClickSetSettings = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSettingsChoose(event.target.name);
  }, []);

  const handleSetInputId = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputId(event.currentTarget.value);
  }, []);

  const handlerSetData = useCallback(() => {
    if (settingsChoose !== 'id') {
      handleSetEnvironment('test')
    } else {
      handleSetEnvironment(inputId)
    }
  }, [handleSetEnvironment, inputId, settingsChoose]);

  return (
    <section className={styles.body}>
      <main className={styles.checkbox_section}>
        <div className={styles.list_item}>
          <Checkbox
            value={settingsChoose === 'test'}
            svg={<CheckboxLogo />}
            name="test"
            onChange={handleClickSetSettings}
            className={styles.checkbox}
          />
          <div className={styles.data}>Тест</div>
        </div>
        <div className={styles.list_item}>
          <Checkbox
            value={settingsChoose === 'dev'}
            svg={<CheckboxLogo />}
            name="dev"
            onChange={handleClickSetSettings}
            className={styles.checkbox}
          />
          <div className={styles.data}>Dev</div>
        </div>
        <div className={styles.list_item}>
          <Checkbox
            value={settingsChoose === 'id'}
            svg={<CheckboxLogo />}
            name="id"
            onChange={handleClickSetSettings}
            className={styles.checkbox} />
          <div className={styles.input_section}>
            <div className={styles.data}>Ввести IP вручную</div>
            <Input
              value={inputId}
              onChange={handleSetInputId}
              placeholder="Номер IP"
              className={styles.input}
              disabled={settingsChoose !== 'id'}
            />
          </div>
        </div>
      </main>
      <Button
        disabled={settingsChoose === 'id' && !inputId}
        onClick={handlerSetData}
        theme="primary"
        size="l"
      >
        Готово
      </Button>
    </section>

  );
};