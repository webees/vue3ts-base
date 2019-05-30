<template>
  <div class="hello">
    <button @click="$router.push({path: '/hello/vue'})">vue</button>
    <button @click="$router.push({path: '/hello/antd'})">antd</button>
    <span>hello</span>
    <router-view/>
  </div>
</template>

<script>
export default {

};
</script>
