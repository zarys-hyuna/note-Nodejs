const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK_PORTFOLIO(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => {
      if (element.id == stockId) {
        return element.id;
      }
    });

    if (record) {
      record.quantity = parseInt(record.quantity, 10) + parseInt(quantity, 10);
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }

    state.funds -= stockPrice * quantity;
  },

  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (parseInt(record.quantity, 10) > parseInt(quantity, 10)) {
      record.quantity = parseInt(record.quantity, 10) - parseInt(quantity, 10);
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += stockPrice * quantity;
  },

  DEC_FUNDS(state, round) {
    if (round % 10 === 5) {
      state.funds = state.funds - 200 * (round - 5);
    }
    if (round % 10 === 0) {
      state.funds = state.funds + 5000;
    }
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  },

  decRound({ commit }, round) {
    commit("DEC_FUNDS", round);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
