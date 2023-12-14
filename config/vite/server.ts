import { ServerOptions } from 'vite';

const DEV_ROOT = 'http://192.168.100.72/license-process-service/';
const proxy_target = DEV_ROOT;

export const serverOptions: ServerOptions = {
  port: 3000,
  proxy: {
    '/devApi/license-process-service/': {
      target: proxy_target,
      changeOrigin: true,
      autoRewrite: true,
      secure: true,
      rewrite: (path) => {
        console.log(path);
        return path.replace(/^\/devApi\/license-process-service/, '');
      },
      configure: (proxy, _options) => {
        proxy.on('error', (err, _req, _res) => {
          console.log('proxy error', err);
        });
        proxy.on('proxyReq', (proxyReq, req, _res) => {
          console.log('Sending Request to the Target:', req.method, req.url);
          console.log('proxyReq:', proxyReq.path, proxyReq.host);
        });
        proxy.on('proxyRes', (proxyRes, req, _res) => {
          console.log(
            'Received Response from the Target:',
            proxyRes.statusCode,
            req.url,
          );
        });
      },
    },
    '^/license-process-service/oauth2/authorization/keycloak': {
      target: proxy_target,
      // changeOrigin: true,
      autoRewrite: true,
      secure: true,
      rewrite: (path) => {
        console.log(path);
        return path.replace(/^\/license-process-service/, '');
      },
      configure: (proxy, _options) => {
        proxy.on('error', (err, _req, _res) => {
          console.log('proxy error', err);
        });
        proxy.on('proxyReq', (proxyReq, req, _res) => {
          console.log('Sending Request to the Target:', req.method, req.url);
          console.log('proxyReq:', proxyReq.path, proxyReq.host);
        });
        proxy.on('proxyRes', (proxyRes, req, _res) => {
          console.log(
            'Received Response from the Target:',
            proxyRes.statusCode,
            req.url,
          );
        });
      },
    },
    '^/auth-server/.*': {
      target: 'http://192.168.100.72/',
      // changeOrigin: true,
      autoRewrite: true,
      secure: true,
      // rewrite: (path) => {
      //   console.log(path);
      //   return path.replace(/^\/license-process-service/, '');
      // },
      configure: (proxy, _options) => {
        proxy.on('error', (err, _req, _res) => {
          console.log('proxy error', err);
        });
        proxy.on('proxyReq', (proxyReq, req, _res) => {
          console.log('Sending Request to the Target:', req.method, req.url);
          console.log('proxyReq:', proxyReq.path, proxyReq.host);
        });
        proxy.on('proxyRes', (proxyRes, req, _res) => {
          console.log(
            'Received Response from the Target:',
            proxyRes.statusCode,
            req.url,
          );
        });
      },
    },
  },
};
