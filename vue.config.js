var vueServe = require("./vue.serve");
var vueBuild = require("./vue.build");

const IS_DEV = process.env.NODE_ENV === "production" ? false : true;
const CDN_BASE =
  "//" +
  process.env.VUE_APP_CDN_DOMAIN +
  "/" +
  process.env.VUE_APP_QINIU_PATH +
  "/";

module.exports = {
  publicPath: IS_DEV ? "/" : CDN_BASE,
  productionSourceMap: IS_DEV,
  integrity: true,
  css: {
    extract: false, // 不提取css
    sourceMap: IS_DEV,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: true,
    port: 8888,
    proxy: null
  },
  configureWebpack: {
    externals: {
      "vue-router": "VueRouter",
      "ant-design-vue": "Antd",
      "vue-i18n": "VueI18n",
      vue: "Vue",
      vuex: "Vuex",
      axios: "axios"
    }
  },
  chainWebpack: webpackConfig => {
    IS_DEV ? vueServe(webpackConfig) : vueBuild(webpackConfig);
  }
};
