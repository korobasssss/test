import { IProfile } from '../types';
import { profileStore } from '../store';
import { createRequest } from '../../../base/api/createRequest';

export const getProfileAction = async (): Promise<void> => {
  profileStore.setLoading();
  try {
    const res = await createRequest<IProfile>({
      url: '/api/user/current',
      method: 'GET',
    });
    profileStore.setFinished(res.data);
  } catch (e) {
    console.log(e);
    profileStore.setError(e);
  }
};
