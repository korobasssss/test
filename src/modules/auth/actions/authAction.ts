import {errorPopupStore} from 'src/base/store';

import {authStore} from '../stores';
import {AxiosError} from 'axios';
import {authAxiosInstance} from "../../../base/api";


export const authAction = async (): Promise<void> => {
  try {
    authStore.setLoginLoading();

    const response = await authAxiosInstance({
      method: 'POST',
      url: `/realms/license-manager/protocol/openid-connect/token`,
      data: {
        grant_type: "password",
        username: "admin",
        password: "admin",
      }
    });

    const ACCESS_TOKEN = response.data?.access_token;

    localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN);

    authStore.setIsAuth(true);
    authStore.setLoginEnd();
  } catch (err) {
    const error = err as AxiosError<{ errorMsg?: string }>;

    authStore.setLoginError();
    errorPopupStore.addError('loginErrorMessage');

    throw new Error(error.message);
  }
};
