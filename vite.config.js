import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:"0.0.0.0",
    port: 5174
    // proxy:{
    //   // 检测以/proxy开头的请求
    //   '/proxy': {
    //     target: 'http://127.0.0.1:9000',
    //     changeOrigin: true,
    //     // 将/proxy替换为空字符串
    //     rewrite: (path) => path.replace(/^\/proxy/, ''),
    //   },
    // }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
    },
  },
  base: './',
})





