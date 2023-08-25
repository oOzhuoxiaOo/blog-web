import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:"0.0.0.0",
    proxy:{
      // 检测以/proxy开头的请求
      '/proxy': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
        // 将/proxy替换为空字符串
        rewrite: (path) => path.replace(/^\/proxy/, ''),
      },
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
    },
  },
})





