<template>
  <div>
    <h1>Trade or View portfolio</h1>
    <h6>You can Save or Load your data</h6>
    <h6>Click on 'End Day' to end your turn</h6>
    <h6>After the 5th round you will lose $1000 at the end of each day</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
