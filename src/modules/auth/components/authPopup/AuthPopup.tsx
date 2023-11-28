import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Button, Popup } from '../../../../base/components';
import { authStore } from '../../stores';
import { useKeycloak } from '@react-keycloak/web';

export const AuthPopup: FC = observer(() => {
  const { data } = authStore;
  const { keycloak } = useKeycloak();

  window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log(msg, url, lineNo, columnNo, error);
    return false;
  };

  return (
    <Popup
      // headerFontSize={headerFontSize}
      headerTitle="Авторизация"
      // handleClosePopup={handleCloseError}
      // handleClickSubmit={handleCloseError}
      // submitButtonLabel={submitButtonLabel ?? EPopupButtonLabel.Ok}
      isOpen={Boolean(data)}
    >
      <Button
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => keycloak.login()}
      >
        Login
      </Button>
      {/*<div dangerouslySetInnerHTML={{ __html: data }} />*/}
      {/*{isTranslatedErrorFound ? (*/}
      {/*  <Translation path={getPopupErrorTranslation(data)} values={values} />*/}
      {/*) : (*/}
      {/*  `${data}`*/}
      {/*)}*/}
    </Popup>
  );
});
