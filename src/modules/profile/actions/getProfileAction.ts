import { axiosInstance } from '../../../base/api';
import { IProfile } from '../types';
import { profileStore } from '../store';

export const getProfileAction = async (): Promise<void> => {
  profileStore.setLoading();
  try {
    const res = await axiosInstance<IProfile>({
      url: '/api/user/current',
      method: 'GET',
    });
    console.log(res.data);
    profileStore.setFinished(res.data);
  } catch (e) {
    console.log(e);
    profileStore.setError(e);
  }
};
