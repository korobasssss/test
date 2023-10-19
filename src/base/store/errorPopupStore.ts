import {action, makeObservable, override, observable} from 'mobx';

import {BaseApiStoreClass} from '../classes';
import {ErrorPopupErrors, TranslationValues} from '../types';

// import { apiStore } from './apiStore';

class ErrorPopupStore extends BaseApiStoreClass<ErrorPopupErrors> {
  public values: TranslationValues = {};
  public suppressErrors: boolean = false;
  public headerTitle: string | null = null;
  public headerFontSize: number | null = null;
  public submitButtonLabel: string | null = null;

  public constructor() {
    super();
    makeObservable(this, {
      data: override,
      addError: action,
      shiftError: action,
      values: observable,
      setDynamicValue: action,
      clearError: action,
      headerTitle: observable,
      headerFontSize: observable,
      submitButtonLabel: observable,
    });
    this.data = [];
  }

  public addError = (
    errorMessage: string,
    supressRepeated: boolean = false,
    headerTitle?: string,
    headerFontSize?: number,
    submitButtonLabel?: string,
  ): void => {
    if (
      this.data &&
      !this.suppressErrors &&
      !(supressRepeated && this.data.find((error) => error === errorMessage))
      // && !apiStore.isUnauthorizeError
    ) {
      this.headerTitle = headerTitle ?? null;
      this.headerFontSize = headerFontSize ?? null;
      this.submitButtonLabel = submitButtonLabel ?? null;
      this.data.push(errorMessage);
    }
  };

  public shiftError = (): void => {
    if (this.data && this.data.length && !this.suppressErrors) {
      this.data.shift();
    }
  };

  public setDynamicValue(values: TranslationValues): void {
    this.values = values;
  }

  public setSuppressErrors(suppress: boolean): void {
    this.suppressErrors = suppress;
  }

  public clearError = (): void => {
    this.data = [];
  };
}

export const errorPopupStore = new ErrorPopupStore();
