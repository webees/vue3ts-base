<template>
  <a-locale-provider :locale="d_locale[c_app.language]">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  data() {
    return {
      d_locale: {
        zhCN
      }
    }
  },
  computed: {
    c_app: vm => vm.$store.__s('app')
  }
}
</script>

<style lang="less">
@import "./assets/style/theme.less";
</style>
