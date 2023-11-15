import {ERequestStatus} from 'src/base/constants';
import {action, makeObservable, observable, override} from 'mobx';
import {BaseApiStoreClass} from '../../../base/classes';


class AuthStore extends BaseApiStoreClass<any> {
  public loginStatus: ERequestStatus = ERequestStatus.Pending;
  public headerTitle: string = '';
  public firstLogin: boolean = false;
  public isAuth: boolean = false; //TODO false?
  public isAuthStatus: ERequestStatus = ERequestStatus.Loading;

  public constructor() {
    super();
    makeObservable(this, {
      data: override,
      loginStatus: observable,
      headerTitle: observable,
      firstLogin: observable,
      isAuth: observable,
      isAuthStatus: observable,
      setUserData: action,
      setHeaderTitle: action,
      setLoginLoading: action,
      setLoginEnd: action,
      setLoginError: action,
      setFirstLogin: action,
      setIsAuth: action,
      setIsAuthStatus: action,
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
}

export const authStore = new AuthStore();
