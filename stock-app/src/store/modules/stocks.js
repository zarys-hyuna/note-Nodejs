import stocks from "../../data/stocks";

const state = {
  round: 1,
  stocks: [],
  dataTrend: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach((stock, index) => {
      let rnd = Math.random();
      let volatility = 0.07;
      let change_percent = 2 * volatility * rnd;
      if (change_percent > volatility) {
        change_percent -= 2 * volatility;
      }
      let change_amount = parseInt(stock.price, 10) * change_percent;

      stock.price = Math.round(parseInt(stock.price, 10) + change_amount);
      state.dataTrend[index].push(stock.price);
      console.log(state.dataTrend[index]);
    });
    state.round++;
  },
  SET_TREND(state) {
    state.stocks.forEach((stock, index) => {
      state.dataTrend[index] = [stock.price];
      console.log(state.dataTrend[index]);
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK_PORTFOLIO", order);
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },

  initDataTrend: ({ commit }) => {
    commit("SET_TREND", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  },
  rounds: state => {
    return state.round;
  },

  dataTrends: state => {
    return state.dataTrend;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
