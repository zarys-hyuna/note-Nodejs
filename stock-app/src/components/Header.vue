<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>
    </div>
  </nav>
</template>

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
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
    toggleDropdown(isDropdownOpen) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

