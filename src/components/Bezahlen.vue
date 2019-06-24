<template>
  <div class="container">
    <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>
    <!-- choose table  -->
    <div class="form-group mt-4 text-info">
      <label for="tisch">Tisch auswählen</label>
      <select
        class="form-control shadow"
        id="tisch"
        v-model="table"
        @change="getTableData"
      >
        <option
          v-for="(number, index) in 20"
          :key="index"
        >{{number}}</option>
        <option disabled> -- </option>

        <option>30</option>

      </select>
    </div>
    <!-- list with pay items -->
    <ul
      class="list-group p2 shadow text-info mt-5"
      v-if="order.length > 0"
    >
      <bezahl-item
        v-for="(item, index) in order"
        :key="index"
        :pay="item"
        @getGroup="calcSplitPrice"
        @getSubtotal="calcSubtotal"
        @deleteItem="deleteItem"
      ></bezahl-item>
    </ul>

    <!-- alert, if table is empty -->
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
        <div
          class="p-2 bd-highlight  p-2"
          @click="reloadSum"
        ><i class="fas fa-sync"></i></div>
      </li>
    </ul>
    <ul
      class="list-group p2 shadow text-info mt-5"
      v-if="order.length > 0 && splitSum === null"
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
    <div v-if="subTotalItems.length > 0">
      <ul class="list-group list-group-flush mt-3">
        <li
          class="list-group-item text-info"
          v-for="(item, index) in subTotalItems"
          :key="index"
        >{{item}}</li>
        <li class="list-group-item text-info"> <strong style="color: #990000">Zwischensumme: {{subTotal}} € </strong></li>

      </ul>
      <div
        class="text-right mt-3"
        @click="clearSubtotal"
      ><i class="fas fa-check text-info fa-2x"></i></div>

    </div>

  </div>
</template>

<script>
import BezahlItem from "./BezahlItem.vue";
import db from "./firebaseinit";

export default {
  name: "Bezahlen",
  data() {
    return {
      table: null,
      order: [],
      sum: null,
      splitSum: null,
      payParty: "",
      subTotal: null,
      subTotalItems: []
    };
  },
  components: {
    BezahlItem
  },
  methods: {
    getTableData() {
      this.splitSum = null;
      this.order = [];
      this.sum = null;
      this.payParty = "";
      this.subTotal = null;
      this.subTotalItems = [];
      db.collection("orderItems")
        .where("table", "==", this.table)
        .get()
        .then(res => {
          res.forEach(doc => {
            var data = doc.data();
            data.id = doc.id;
            this.order.push(data);
          });
          if (this.order.length > 0) {
            this.order.forEach(el => {
              this.sum = this.sum + parseFloat(el.price * el.quantity);
            });
          }
          if (this.sum) {
            this.sum = this.sum.toFixed(2);
          }
        });
    },
    setStatus() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date + " " + time;
      this.order.forEach(el => {
        if (this.payParty == el.party || this.payParty == "") {
          if (!el.doneTime) {
            el.doneTime = dateTime;
          }
          if (!el.checkedTime) {
            el.checkedTime = dateTime;
          }
          const paidOrder = {
            name: el.name,
            price: el.price,
            quantity: el.quantity,
            orderTime: el.orderTime,
            options: el.options,
            type: el.type,
            doneTime: el.doneTime,
            checkedTime: el.checkedTime
          };
          db.collection("orderItems")
            .doc(el.id)
            .delete();
          db.collection("History").add(paidOrder);
        }
      });
      this.table = null;
      this.order = [];
      this.sum = null;
    },
    calcSplitPrice(payParty) {
      this.splitSum = null;
      this.order.forEach(el => {
        if (el.party == payParty) {
          this.splitSum = this.splitSum + parseFloat(el.price * el.quantity);
          this.payParty = payParty;
        }
      });
      this.splitSum = this.splitSum.toFixed(2);
    },
    calcSubtotal(payItem, payPrice) {
      this.subTotalItems.push(payItem);
      this.subTotal += payPrice;
    },
    clearSubtotal() {
      this.subTotalItems = [];
      this.subTotal = null;
    },
    deleteItem(price) {
      this.sum = this.sum - parseFloat(price);
      this.sum = this.sum.toFixed(2);
    },
    reloadSum() {
      this.splitSum = null;
      this.payParty = "";
    }
  }
};
</script>