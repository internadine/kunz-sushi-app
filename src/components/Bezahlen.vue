<template>
  <div class="container">
    <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>

    <div class="form-group mt-4 text-info">
      <label for="tisch">Tisch auswählen</label>
      <select
        class="form-control shadow"
        id="tisch"
        v-model="table"
        @change="getTableData"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>

    <ul
      class="list-group p2 shadow text-info mt-5"
      v-if="order.length > 0"
    >
      <bezahl-item
        v-for="(item, index) in order"
        :key="index"
        :pay="item"
        @getGroup="calcSplitPrice"
      ></bezahl-item>
    </ul>
    <div
      v-if="order.length < 1 && table !== null"
      class="alert alert-info mt-5"
      role="alert"
    >
      An Tisch {{table}} ist keine Rechnung mehr offen.
    </div>
    <ul
      class="list-group p2 shadow text-info mt-5 "
      v-if="splitSum"
    >
      <li class="d-flex bd-highlight list-group-item border border-danger">
        <div
          class="p-2 bd-highlight"
          v-if="order.length > 0"
        >Summe in Euro ({{payParty}}) </div>
        <div class="p-2 bd-highlight ml-auto p-2">{{splitSum}}</div>
      </li>
    </ul>
    <ul
      class="list-group p2 shadow text-info mt-5"
      v-if="order.length > 0 && splitSum ==null"
    >
      <li class="d-flex bd-highlight list-group-item">
        <div class="p-2 bd-highlight">Summe in Euro (Gesamt) </div>
        <div class="p-2 bd-highlight ml-auto p-2">{{sum}} </div>
      </li>
    </ul>

    <div
      v-if="order.length > 0"
      class="container text-right mt-5"
    ><button
        class="btn-lg btn-info shadow "
        @click="setStatus"
      >Bezahlt</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import _ from "underscore";
import BezahlItem from "./BezahlItem.vue";

export default {
  name: "Bezahlen",
  data() {
    return {
      table: null,
      order: [],
      sum: null,
      splitSum: null,
      payParty: ""
    };
  },
  components: {
    BezahlItem
  },
  methods: {
    getTableData() {
      axios
        .get(
          `https://kunz-sushi-35c35.firebaseio.com/orderItem.json?orderBy="table"&equalTo="${
            this.table
          }"`,
          {
            params: {
              auth: this.$store.getters.serveToken
            }
          }
        )
        .then(response => {
          const data = response.data;
          let order = [];
          const priceArray = [];
          let sum = null;
          for (const key in data) {
            let item = data[key];
            item = _.extend(item, {
              dbID: key
            });
            item.id = data[key];
            order.push(item);
          }
          if (order.length < 1 || order == undefined) {
            this.order = [];
            this.$router.push("/bezahlen");
          } else {
            order.forEach(el => {
              priceArray.push(parseFloat(el.price * el.quantity));
            });
            sum = priceArray.reduce((total, amount) => total + amount);
            this.sum = sum;
            this.order = order;
          }
        });
    },
    setStatus() {
      this.order.forEach(el => {
        if (this.payParty == el.party || this.payParty == "") {
          const paidOrder = {
            name: el.name,
            price: el.price,
            quantity: el.quantity,
            orderTime: el.orderTime,
            doneTime: el.doneTime,
            options: el.options,
            status: "paid"
          };
          axios
            .put(
              `https://kunz-sushi-35c35.firebaseio.com/orderItem/${
                el.dbID
              }.json`,
              paidOrder,
              {
                params: {
                  auth: this.$store.getters.serveToken
                }
              }
            )
            .then(response => {
              // eslint-disable-next-line
              console.log(response);
            })
            .catch(err => {
              // eslint-disable-next-line
              console.log(err);
            });
        }
      });
      this.$router.push("/bestellung");
    },
    calcSplitPrice(payParty) {
      this.splitSum = null;
      this.order.forEach(el => {
        if (el.party == payParty) {
          this.splitSum = this.splitSum + parseFloat(el.price * el.quantity);
          this.payParty = payParty;
        }
      });
    }
  }
};
</script>