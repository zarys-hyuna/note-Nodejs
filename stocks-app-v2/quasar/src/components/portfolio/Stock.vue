<template>
  <div class="col-sm-6 col-md-4">
    <div class="card card-sucess" style="margin-top:30px;">
      <div class="card-header bg-dark text-white">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="card-body bg-secondary text-white">
        <div class="float-left">
          <input
            type="number"
            class="form-control mb-2"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
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
            @click="sell_Stocks"
            :disabled="insufficientQuantity || parseInt(quantity,10) <= 0 || !Number.isInteger(parseInt(quantity,10))"
          >{{ insufficientQuantity ? 'Not enough Stocks': 'Sell'}}</button>
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
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data: () => {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      const selectedQuan = parseInt(this.quantity, 10);
      const ownedQuan = parseInt(this.stock.quantity, 10);
      return selectedQuan > ownedQuan;
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    sell_Stocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
      this.quantity = 0;
    }
  }
};
</script>

