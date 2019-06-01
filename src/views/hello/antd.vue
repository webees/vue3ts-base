<template>
  <div class="antd">
    <h1>antd</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.__s("app.language", "antd");
  }
};
</script>
