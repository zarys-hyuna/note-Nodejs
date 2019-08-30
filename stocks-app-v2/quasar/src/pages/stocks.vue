<template>
  <q-page class="flex justify-center">
    <div>
      <stocks-Comp></stocks-Comp>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Stocks from "../components/stocks/Stocks";
export default {
  components: {
    stocksComp: Stocks
  },
  name: "PageStocks"
};
</script>