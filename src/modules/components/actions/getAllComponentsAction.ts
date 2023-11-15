import { componentsStore } from '../store';
import { axiosInstance } from '../../../base/api';
import { IComponentView } from '../types';
// import { EComponentStatus } from '../constants';

// const mockData = [
//   {
//     id: 0,
//     name: 'string',
//     number: 111,
//     description: 'string',
//     status: EComponentStatus.ARCHIVE,
//   },
//   {
//     id: 1,
//     name: 'string',
//     number: 222,
//     description: 'string',
//     status: EComponentStatus.AVAILABLE,
//   },
//   {
//     id: 2,
//     name: 'string',
//     number: 333,
//     description: 'string',
//     status: EComponentStatus.AVAILABLE,
//   },
// ];

export const getAllComponentsAction = async (): Promise<void> => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  componentsStore.setLoading();
  try {
    const res = await axiosInstance<IComponentView[]>({
      url: `/api/owners/components/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    componentsStore.setFinished(res.data);
    // componentsStore.setFinished(mockData);
  } catch (e) {
    console.log(e);
    componentsStore.setError(e);
  }
  //@ts-ignore
  // productStore.setFinished(mockData);
};
