import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import i18n from "./i18n";

import AntDesignVue from "ant-design-vue";

if (process.env.NODE_ENV === "production") {
  Vue.config.productionTip = false; // 禁用提示
} else {
  Vue.config.devtools = true; // 开启devtools调试工具
  Vue.config.debug = true; // 开启debug模式
}

Vue.config.errorHandler = (msg, vm, info) => {
  console.log(msg, vm, info);
};

Vue.config.warnHandler = (msg, vm, trace) => {
  console.log(msg, vm, trace);
};

Vue.use(AntDesignVue);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
