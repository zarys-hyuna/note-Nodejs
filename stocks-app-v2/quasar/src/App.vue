<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch("initStocks");
    this.$store.dispatch("initDataTrend");
  }
}
</script>

<style>
</style>
