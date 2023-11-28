import React, {
  ChangeEventHandler,
  FC,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import { observer } from 'mobx-react';
import { Button, Input, Popup } from '../../../../base/components';
import { authStore } from '../../stores';
import styles from '../../../products/components/EditProductForm/styles.module.scss';
import { authAction, IAuthData } from '../../actions';

export const AuthPopup: FC = observer(() => {
  const { isAuth, authParams } = authStore;
  // const { keycloak } = useKeycloak();
  const [authState, setAuthState] = useState<IAuthData>({} as IAuthData);

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      console.log(authState);
      authAction(authParams, authState);
      // onSubmit(authState);
    },
    [authParams, authState],
  );

  const onChangeFormInput = useCallback(
    (
        key: keyof IAuthData,
      ): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
      (event) => {
        setAuthState({ ...authState, [key]: event.target.value });
      },
    [authState, setAuthState],
  );

  const onClosePopup = useCallback(() => {
    console.log('onClose');
    console.log(isAuth);
    authStore.setIsAuth(true);
  }, [isAuth]);

  return (
    <Popup
      // headerFontSize={headerFontSize}
      headerTitle="Авторизация"
      handleClosePopup={onClosePopup}
      // handleClickSubmit={handleCloseError}
      // submitButtonLabel={submitButtonLabel ?? EPopupButtonLabel.Ok}
      isOpen={!isAuth}
    >
      {/*{data}*/}
      <div className={styles.form}>
        <form className={styles['form-fields']}>
          <div className={styles['form-fields__inputs']}>
            <Input
              // defaultValue={product.name}
              onChange={onChangeFormInput('login')}
              placeholder="login"
              name="login"
              type="text"
            />
          </div>
          <div className={styles['form-fields__inputs']}>
            <Input
              onChange={onChangeFormInput('password')}
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <div className="center">
            <Button
              className={styles.button}
              theme="secondary"
              type="button"
              size="s"
              onClick={handleSubmit}
            >
              Логин
            </Button>
          </div>
        </form>
      </div>
      {/*<Button*/}
      {/*  // eslint-disable-next-line react/jsx-no-bind*/}
      {/*  onClick={() => keycloak.login()}*/}
      {/*>*/}
      {/*  Login*/}
      {/*</Button>*/}
      {/*<div dangerouslySetInnerHTML={{ __html: data }} />*/}
    </Popup>
  );
});
