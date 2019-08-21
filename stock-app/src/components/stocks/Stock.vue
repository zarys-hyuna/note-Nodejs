<template>
  <div class="col-sm-6 col-md-4">
    <div class="card card-sucess" style="margin-top:30px;">
      <div class="card-header bg-dark text-white">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="card-body bg-secondary text-white">
        <div class="float-left">
          <input
            type="number"
            class="form-control mb-2"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="float-right">
          <router-link
            :to="{ name: 'user', params: { id: this.stock.id }}"
            activeClass="active"
            :disabled="insufficientRounds == true"
          >
            <button class="btn btn-success" :disabled="insufficientRounds == true">Graphs</button>
          </router-link>
          <button
            class="btn btn-success"
            @click="buy_Stocks"
            :disabled="insufficientFunds == true || parseInt(quantity,10) <= 0 || !Number.isInteger(parseInt(quantity,10))"
          >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.danger {
  border: 2px solid rgba(255, 0, 0, 0.8);
}
</style>
<script>
export default {
  props: ["stock"],
  data: () => {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    insufficientRounds() {
      if (this.$store.getters.rounds < 2) {
        return true;
      }
      return false;
    }
  },
  methods: {
    buy_Stocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
