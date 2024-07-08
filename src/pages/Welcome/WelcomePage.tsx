import React, { ReactElement, useCallback } from 'react';
import { Button, MainLayout } from 'src/base/components';
import styles from './styles.module.scss';
import { getGhostByIdAction } from 'src/modules/components/actions';
import { useNavigate } from 'react-router-dom';

export const WelcomeComponent = (): ReactElement => {

  const navigation = useNavigate();

  const onClickHandler = useCallback(() => {
    console.log('Welcome');
    navigation('/main')
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

export const WelcomePage = () : ReactElement => {

  return (
    <MainLayout
      topTitle="Welcome Page"
      /* eslint-disable-next-line react/no-children-prop */
      children={
        <WelcomeComponent />
      }
      withBottomNavigation={false}
    />
  )
}
