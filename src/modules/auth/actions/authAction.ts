import { errorPopupStore } from 'src/base/store';

import { authStore } from '../stores';
import { AxiosError } from 'axios';
import { authAxiosInstance } from '../../../base/api';

export const authAction = async (): Promise<void> => {
  try {
    authStore.setLoginLoading();

    const response = await authAxiosInstance({
      method: 'POST',
      url: `/realms/license-manager/protocol/openid-connect/auth`,
      data: {
        response_type: 'code',
        client_id: 'license-process-service',
        scope: 'openid',
        state: '4xdhv2p5jGYuWnb_lzONz0cUhoq4xCD7QbaF4m377tY=',
        redirect_uri:
          'http://192.168.100.72/license-process-service/login/oauth2/code/keycloak',
        nonce: 'tv49-wSghRhpEJdouxZV86KZFcaTVlKNezMUD-DCwS0',
        // grant_type: 'password',
        // username: 'admin',
        // password: 'admin',
      },
    });

    const ACCESS_TOKEN = response.data?.access_token;

    localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN);

    authStore.setIsAuth(true);
    authStore.setFinished(response.data);
    authStore.setLoginEnd();
  } catch (err) {
    const error = err as AxiosError<{ errorMsg?: string }>;

    authStore.setLoginError();
    errorPopupStore.addError('loginErrorMessage');

    throw new Error(error.message);
  }
};
