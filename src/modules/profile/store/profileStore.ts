import { makeObservable, override } from 'mobx';

import { BaseApiStoreClass } from 'src/base/classes';
import { IProfile } from '../types';

class ProfileStore extends BaseApiStoreClass<IProfile> {
  public constructor() {
    super();
    makeObservable(this, {
      data: override,
    });
  }
}

export const profileStore = new ProfileStore();
