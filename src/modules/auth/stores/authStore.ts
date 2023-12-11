import { ERequestStatus } from 'src/base/constants';
import { action, makeObservable, observable, override } from 'mobx';
import { BaseApiStoreClass } from '../../../base/classes';

export interface IAuthParams {
  client_id: string;
  execution: string;
  session_code: string;
  tab_id: string;
}

class AuthStore extends BaseApiStoreClass<any> {
  public loginStatus: ERequestStatus = ERequestStatus.Pending;
  public headerTitle: string = '';
  public firstLogin: boolean = false;
  public isAuth: boolean = true;
  public isAuthStatus: ERequestStatus = ERequestStatus.Loading;
  public authParams: Partial<IAuthParams> = {};

  public constructor() {
    super();
    makeObservable(this, {
      data: override,
      loginStatus: observable,
      headerTitle: observable,
      firstLogin: observable,
      isAuth: observable,
      isAuthStatus: observable,
      authParams: observable,
      setUserData: action,
      setHeaderTitle: action,
      setLoginLoading: action,
      setLoginEnd: action,
      setLoginError: action,
      setFirstLogin: action,
      setIsAuth: action,
      setIsAuthStatus: action,
      setAuthParams: action,
    });
  }

  public setUserData = (data: any): void => {
    this.data = data;
    this.status = ERequestStatus.Ready;
  };

  public setHeaderTitle = (val: string): void => {
    this.headerTitle = val;
  };

  public setLoginLoading = (): void => {
    this.status = ERequestStatus.Loading;
  };

  public setLoginEnd = (): void => {
    this.status = ERequestStatus.Ready;
  };

  public setLoginError = (): void => {
    this.status = ERequestStatus.Error;
  };

  public setFirstLogin = (firstLogin: boolean): void => {
    this.firstLogin = firstLogin;
  };

  public setIsAuth = (isAuth: boolean): void => {
    this.isAuth = isAuth;
  };

  public setIsAuthStatus = (status: ERequestStatus): void => {
    this.isAuthStatus = status;
  };

  public setAuthParams = (params: IAuthParams): void => {
    this.authParams = params;
  };
}

export const authStore = new AuthStore();
