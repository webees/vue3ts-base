<template>
  <div class="hello">
    <button @click="$router.push({ path: '/hello/vue' })">vue</button>
    <button @click="$router.push({ path: '/hello/antd' })">antd</button>
    <span>{{ $store.__s("app.language") }}</span>
    <router-view />
    <!-- <TradingView :theme="c_theme" :symbol="symbol" /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("app", {
      c_theme: state => state.theme,
      c_symbol: state => state.symbol
    })
  }
};
</script>
