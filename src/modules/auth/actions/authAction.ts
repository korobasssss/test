import { errorPopupStore } from 'src/base/store';

import { authStore, IAuthParams } from '../stores';
import { AxiosError } from 'axios';
import { authAxiosInstance } from '../../../base/api';

export interface IAuthData {
  login: string;
  password: string;
}

export const authAction = async (
  params: Partial<IAuthParams>,
  data: IAuthData | null,
): Promise<void> => {
  try {
    authStore.setLoginLoading();

    if (!data) return;

    const response = await authAxiosInstance({
      method: 'POST',
      url: '/realms/license-manager/login-actions/authenticate',
      data,
      params,
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
