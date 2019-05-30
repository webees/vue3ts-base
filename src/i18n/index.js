import Vue from "vue";
import VueI18n from "vue-i18n";
import Store from "../store";

Vue.use(VueI18n);

const zhCN = require("./zhCN");

const locale = window.navigator.language.split("-").join("");

if (!Store.__s("app.language")) Store.__s("p1.language", locale);

export default new VueI18n({
  locale,
  silentTranslationWarn: true, // 关掉不必要的警告提示
  messages: {
    zhCN
  }
});
