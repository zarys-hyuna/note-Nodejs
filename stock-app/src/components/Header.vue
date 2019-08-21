<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-left: -1rem">
    <router-link to="/" class="navbar-brand">Stock Trader App</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" activeClass="active" tag="li">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link to="/stocks" activeClass="active" tag="li">
          <a class="nav-link">Stocks</a>
        </router-link>

        <li>
          <a href="#" class="nav-link" @click="endDay()">End day</a>
        </li>
        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="toggleDropdown"
          >Save and Load</button>
          <div
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            :class="{show: isDropdownOpen, 'dropdown-menu':true}"
          >
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </div>
      </ul>
      <strong class="navbar-text navbar-right" style="margin-right: 10px;">Round: {{ rounds}}</strong>
      <strong class="navbar-text navbar-right" :class="{danger: debt}">Funds: {{ funds | currency}}</strong>
    </div>
  </nav>
</template>
<style scoped>
.danger {
  color: rgba(255, 0, 0, 0.8);
}
</style>
<style>
nav {
  width: 100%;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  z-index: 1;
}
</style>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },

    rounds() {
      return this.$store.getters.rounds;
    },

    debt() {
      if (this.$store.getters.funds < 0) {
        return true;
      }
    }
  },
  methods: {
    ...mapActions(["randomizeStocks", "decRound"]),
    endDay() {
      this.decRound(this.$store.getters.rounds);
      this.randomizeStocks();
      this.$router.push("/stocks");
    },
    toggleDropdown(isDropdownOpen) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

