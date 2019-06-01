<template>
  <div class="vue">
    <h1>vue</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.__s("app.language", "vue");
  }
};
</script>
