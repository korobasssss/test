import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Popup } from '../../../../base/components';
import { authStore } from '../../stores';

export const AuthPopup: FC = observer(() => {
  const { data } = authStore;
  return (
    <Popup
      // headerFontSize={headerFontSize}
      headerTitle="Авторизация"
      // handleClosePopup={handleCloseError}
      // handleClickSubmit={handleCloseError}
      // submitButtonLabel={submitButtonLabel ?? EPopupButtonLabel.Ok}
      isOpen={Boolean(data)}
    >
      <div dangerouslySetInnerHTML={{ __html: data }} />
      {/*{isTranslatedErrorFound ? (*/}
      {/*  <Translation path={getPopupErrorTranslation(data)} values={values} />*/}
      {/*) : (*/}
      {/*  `${data}`*/}
      {/*)}*/}
    </Popup>
  );
});
