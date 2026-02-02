import { defineConfig } from 'dumi';
import { name } from './package.json';

const isDev = process.env.NODE_ENV === 'development';
const publicPath = isDev ? '/' : '/rc-countdown-view/';

export default defineConfig({
  themeConfig: {
    name,
    logo: 'https://www.caijf.top/logo.png',
    nav: [],
    prefersColor: {
      default: 'light',
      switch: false
    },
    footer: 'caijf | Copyright © 2020-present'
  },
  favicons: ['https://www.caijf.top/favicon.ico'],
  base: publicPath,
  publicPath,
  outputPath: 'docs-dist',
  styles: [
    `body .dumi-default-doc-layout {
      background: white;
    }
    body .dumi-default-doc-layout > main{
      padding-top: 24px;
    }
    body .dumi-default-header{
      display: none;
    }
    body .dumi-default-header-left {
      width: auto;
    }
    body .dumi-default-header-menu-btn{
      display: none;
    }
    body .dumi-default-doc-layout > main > .dumi-default-doc-layout-toc-wrapper {
      top: 52px;
    }
    @media screen and (max-width: 400px){
      body .dumi-default-previewer-demo{
        padding: 40px 12px;
      }
      body .dumi-default-doc-layout > main {
        padding: 0 12px;
      }
    }`
  ]
  // more config: https://d.umijs.org/config
});
