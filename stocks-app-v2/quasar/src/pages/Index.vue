<template>
  <q-page class="flex justify-center">
    <div>
      <h1>Trade or View portfolio</h1>
      <h6>You can Save or Load your data</h6>
      <h6>Click on 'End Day' to end your turn</h6>
      <h6>Every 5 Rounds lose $1000 at the end of the Day</h6>
      <hr />
      <p>Your Funds: {{ funds | currency }}</p>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndex"
};
</script>
