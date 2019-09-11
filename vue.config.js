var vueServe = require('./vue.serve')
var vueBuild = require('./vue.build')

const __NODE_ENV__ = process.env.NODE_ENV
const __CDN_DOMAIN__ = process.env.VUE_APP_CDN_DOMAIN
const __QINU_PATH__ = process.env.VUE_APP_QINIU_PATH

const IS_DEV = __NODE_ENV__ === 'production' ? false : true
const CDN_BASE = `//${__CDN_DOMAIN__}/${__QINU_PATH__}/`

module.exports = {
  publicPath: IS_DEV ? '/' : CDN_BASE,
  productionSourceMap: IS_DEV,
  integrity: true,
  css: {
    extract: false, // 不提取css
    sourceMap: IS_DEV,
    loaderOptions: {}
  },
  devServer: {
    open: true,
    port: 8888,
    proxy: null
  },
  configureWebpack: {
    externals: {
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios'
    }
  },
  chainWebpack: webpackConfig => {
    IS_DEV ? vueServe(webpackConfig) : vueBuild(webpackConfig)
  }
}
