const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.100.72',
      changeOrigin: true,
    }),
  );
  app.use(
    'http://192.168.100.72',
    createProxyMiddleware({
      target: 'http://192.168.100.72',
      changeOrigin: true,
    }),
  );
};
