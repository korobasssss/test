import axios from 'axios';
import { authStore } from '../../modules/auth/stores';
import queryString, { ParsedQuery } from 'query-string';
// import { Parser } from 'html-to-react';

const servUrl =
  process.env.NODE_ENV === 'development' ? '' : 'http://192.168.100.72';

export const axiosInstance = axios.create({
  baseURL: `${servUrl}/license-process-service`,
});

export const authAxiosInstance = axios.create({
  baseURL: `${servUrl}/auth-server`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    //   Authorization:
    //     'Basic cHJvZHVjdC1vd25lci1mcm9udGVuZDo5OVlGM05kTHl5MHJpVTFZWmx1dXVITGNjM1BuRmxKSg==',
  },
});

// axiosInstance.defaults.maxRedirects = 0; // Установите значение 0, чтобы предотвратить автоматическое перенаправление
axiosInstance.interceptors.response.use(
  (res) => {
    if (
      res.request.responseURL.includes(
        '/auth-server/realms/license-manager/protocol/openid-connect/auth',
      ) &&
      typeof res.data === 'string'
    ) {
      // @ts-ignore
      // const htmlToReactParser = new Parser();
      // console.log(htmlToReactParser.parse(res.data));
      // console.log(new DOMParser().parseFromString(res.data, 'text/html'));
      const parse = new DOMParser().parseFromString(res.data, 'text/html');
      console.log(parse);
      console.log(parse.getElementById('kc-form-login'));
      // @ts-ignore
      const actionString = parse.getElementById('kc-form-login')?.action;
      const urlString = actionString.substring(
        ((actionString.indexOf('?') ?? 1) as number) + 1,
      );
      console.log(urlString);
      const query: ParsedQuery = queryString.parse(urlString);
      console.log(query);
      // @ts-ignore
      authStore.setAuthParams(query);
      authStore.setIsAuth(false);
      // window.location.reload();
      // return {};
    }
    return res;
  },
  (error) => {
    console.log(error.response);
    if (error.response && [301, 302].includes(error.response.status)) {
      console.log(error.response);
      // const redirectUrl = error.response.headers.location;
      // return axiosInstance.get(redirectUrl);
    }
    return Promise.reject(error);
  },
);
// axiosInstance
//   .get('http://example.com')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
