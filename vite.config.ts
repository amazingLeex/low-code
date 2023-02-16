import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      /* options */
      dirs: ['src/components'], // 组件路径
      extensions: ['vue'], // 组件的扩展名
      deep: true, // 深度搜索
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
      dts: 'types/components.d.ts', // 自动生成类型声明文件
      directoryAsNamespace: false, // 允许子目录作为组件的命名空间前缀
      globalNamespaces: [],
      directives: true, // vue3 写true
      importPathTransform: (v) => v,
      allowOverrides: false, //允许组件名被重写
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/,
      ],
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
