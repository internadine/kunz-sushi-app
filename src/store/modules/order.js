import _ from "underscore";
import router from "../../main";
import "firebase/auth";
import db from "../../components/firebaseinit";

const state = {
  orderItems: [],
  doneSushi: []
};

const getters = {
  orderItems: state => {
    return state.orderItems;
  },
  getTableInfo() {
    db.collection("orderItems").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          var data = change.doc.data();
          state.orderItems.push(data);
        }
      });
    });
  }
};

const mutations = {
  SET_ITEM(state, orderItem) {
    state.orderItems.push(orderItem);
  },
  DELETE_ITEM(state, index) {
    state.orderItems.splice(index, 1);
  },
  ADD_TABLE(state, tableInfo) {
    state.orderItems.forEach(function(el) {
      _.extend(el, tableInfo);
    });
  },
  ORDER(state) {
    state.orderItems.forEach(function(el) {
      db.collection("orderItems")
        .add(el)
        .then(res => {
          // eslint-disable-next-line
          console.log(res);
          state.orderItems = [];
        })
        // eslint-disable-next-line
        .catch(error => console.log(error));
    });
  },
  CLEAR_STATE(state) {
    state.orderItems = [];
  }
};

const actions = {
  updateOrderItems: ({ commit }, orderItem) => {
    commit("SET_ITEM", orderItem);
  },
  removeItem: ({ commit }, index) => {
    commit("DELETE_ITEM", index);
  },
  addTable: ({ commit }, tableInfo) => {
    commit("ADD_TABLE", tableInfo);
    commit("ORDER");
    router.push("/bestellung");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
