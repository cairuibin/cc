// const rewireLess = require("react-app-rewire-less");
// const { getLessVars } = require("antd-theme-generator");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;   
const { override, addDecoratorsLegacy, addLessLoader } = require("customize-cra");
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "red" }
  }),
  addDecoratorsLegacy()

)