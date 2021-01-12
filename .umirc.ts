import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'browser',  // 配置 history 为 'browser' 类型
  },
  base: '/micro-app-a/',  // 微应用将部署在名为 micro-app-a 的子目录
  publicPath: '/micro-app-a/',  // 微应用将部署在名为 micro-app-a 的子目录
  // qiankun 配置，slave 说明这是子应用
  qiankun: {
    slave: {}
  },
});
