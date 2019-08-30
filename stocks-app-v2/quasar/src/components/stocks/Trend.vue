<template>
  <div>
    <trend
      :data="dataTrend"
      :gradient="['#42b983','#42b983','#42b983','#42b983','#6fa8dc','#6fa8dc','#6fa8dc', '#d45757','#d45757' , '#d45757' ]"
      auto-draw
      smooth
      :radius="parseInt('1',10)"
    ></trend>
  </div>
</template>
<script>
export default {
  props: {
    trend: Array
  },
  computed: {
    dataTrend() {
      console.log(
        this.$store.getters.dataTrends[parseInt(this.$route.params.id, 10) - 1]
      );
      return this.$store.getters.dataTrends[
        parseInt(this.$route.params.id, 10) - 1
      ];
    }
  }
};
</script>

