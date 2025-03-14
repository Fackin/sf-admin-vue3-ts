import { fileURLToPath, URL } from 'node:url'
// import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
import { createSvg } from './src/icons/index'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/variables.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // ElementPlus 自动导入 https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          // 自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
          importStyle: "sass",
        })
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          // 按需引入修改主题色添加这一行，使用预处理样式
          importStyle: "sass",
        })
      ],
    }),
    // 或者使用 unplugin-element-plus 
    // ElementPlus({
    //   useSource: true,
    // }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),
    // svg 引入
    createSvg('./src/icons/svg/')
  ],
  server: {
    port: 5108,
    host: '0.0.0.0',
    proxy: {
      '/v1': {
        // target: 'http://financecheck-dev.ccit.com', // 代理地址
        target: 'http://172.16.35.54:8081', // 代理地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/dev/, '')
      }
    }
  }
})
