import { defineConfig } from 'vite';
import { serverOptions } from './config/vite/server';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: serverOptions,
  plugins: [svgr(), react(), eslint()],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, './src') }],
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables/colors.scss";
          @import "./src/styles/variables/animation.scss";
          @import "src/styles/variables/constants";
          @import "./src/styles/variables/gradients.scss";
          @import "./src/styles/variables/roundings.scss";
          @import "./src/styles/variables/screens.scss";
          @import "src/styles/variables/shadows";
        `,
      },
    },
  },
});
