import axios from 'axios';
// import { authStore } from '../../modules/auth/stores';

const servUrl =
  process.env.NODE_ENV === 'development' ? '' : 'http://192.168.100.72';

export const axiosInstance = axios.create({
  baseURL: `${servUrl}/license-process-service`,
});

export const authAxiosInstance = axios.create({
  baseURL: `${servUrl}/auth-server`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic cHJvZHVjdC1vd25lci1mcm9udGVuZDo5OVlGM05kTHl5MHJpVTFZWmx1dXVITGNjM1BuRmxKSg==',
  },
});

// axiosInstance.defaults.maxRedirects = 0; // Установите значение 0, чтобы предотвратить автоматическое перенаправление
// axiosInstance.interceptors.response.use(
//   (res) => {
//     // if (
//     //   res.request.responseURL.includes(
//     //     '/auth-server/realms/license-manager/protocol/openid-connect/auth',
//     //   )
//     // ) {
//     //   authStore.setFinished(res.data);
//     //   // return {};
//     // }
//     return res;
//   },
//   (error) => {
//     console.log(error.response);
//     if (error.response && [301, 302].includes(error.response.status)) {
//       console.log(error.response);
//       // const redirectUrl = error.response.headers.location;
//       // return axiosInstance.get(redirectUrl);
//     }
//     return Promise.reject(error);
//   },
// );
// axiosInstance
//   .get('http://example.com')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
