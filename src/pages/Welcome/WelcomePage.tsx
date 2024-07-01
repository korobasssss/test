import React, { ReactElement, useCallback } from 'react';
import { Button } from 'src/base/components';
import styles from './styles.module.scss';
import { getGhostByIdAction } from 'src/modules/components/actions';

export const WelcomePage = (): ReactElement => {
  const onClickHandler = useCallback(() => {
    console.log('Welcome');
  }, []);
  return (
    <div className={styles.body}>
      <h1>Welcome Page</h1>
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
