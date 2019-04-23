<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
import store from "./vuex/store";
export default {
  name: "app",
};
</script>

<style lang="stylus" scoped>
    .app {
        border: 1px solid #eee,
        background #F4F5F7
    }
</style>
