// const rewireLess = require("react-app-rewire-less");
// const { getLessVars } = require("antd-theme-generator");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;   
const path=require('path')
const { override, addDecoratorsLegacy, addLessLoader,addWebpackAlias } = require("customize-cra");
module.exports = override(

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    "@": path.resolve("src/"),
    "@store": path.resolve("src/store/"),
    "@router": path.resolve("src/router/"),
    "@page": path.resolve("src/page/"),
   }),
)