import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'src/components/WelcomeComponent/styles.module.scss';
import { Button } from 'src/base/components';
import { getGhostByIdAction } from 'src/modules/components/actions';
import { EPaths } from 'src/modules/components/constants/EPaths';

export const WelcomeComponent: FC = () => {
  const navigation = useNavigate();

  const onClickHandler = useCallback(() => {
    console.log('Welcome');
    navigation(EPaths.MAIN)
  }, [navigation]);
  return (
    <div className={styles.body}>
      <p className={styles.description}>
        Здесь будет приложение для UI Omni ghost
      </p>
      <Button
        className={styles.button}
        theme="secondary"
        onClick={onClickHandler}
      >
        Войти
      </Button>
      <Button
        className={styles.button}
        theme="secondary"
        //eslint-disable-next-line react/jsx-no-bind
        onClick={() => getGhostByIdAction({ ghostId: 123 })}
      >
        Get mock
      </Button>
    </div>
  );
};