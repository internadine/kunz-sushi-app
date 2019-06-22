<template>
  <div class="container text-info">
    <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>
    <!-- select table -->
    <div class="form-group mt-4 ">
      <label for="tisch">Tisch auswählen</label>
      <select
        class="form-control shadow"
        id="tisch"
        v-model="table"
        @change="getTableData"
      >
        <!-- number of possible tables -->
        <option
          v-for="(number, index) in tables"
          :key="index"
        >{{number}}</option>
        <option disabled> -- </option>
        <option>30</option>
      </select>
    </div>
    <!-- alert, if nothing is booked on the table -->
    <div
      v-if="order.length == 0 && table !== ''"
      class="alert alert-info mt-5"
      role="alert"
    >
      An Tisch {{table}} ist keine Bestellung gespeichert.
    </div>
    <!-- list all items that are booked on the table  -->
    <ul
      class="list-group p2 shadow text-info mt-5"
      v-if="order.length > 0"
    >
      <Check
        v-for="(item, index) in order"
        :key="index"
        :tableOrder="item"
        @checked="checked"
        @unchecked="unchecked"
        @removeOrder="removeOrder"
      ></Check>
    </ul>
    <!-- remember status -->
    <div class="container text-center"><button
        class="btn-lg btn-info mt-3 shadow"
        @click="rememberStatus"
      >Merken!</button>
    </div>

    <div class="container text-right">
      <router-link to="/bestellung"><i class="fas fa-plus mt-3 text-info fa-3x"></i></router-link>
    </div>

  </div>
</template>

<script>
import _ from "underscore";
import Check from "./CheckTischItem";
import db from "./firebaseinit";
export default {
  name: "CheckTisch",
  data() {
    return {
      table: "",
      party: "",
      order: [],
      checkedID: [],
      tables: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        19,
        19,
        20
      ]
    };
  },
  components: {
    Check
  },
  methods: {
    getTableData() {
      this.order = [];
      db.collection("orderItems")
        .where("table", "==", this.table)
        .get()
        .then(res => {
          res.forEach(doc => {
            var data = doc.data();
            data.id = doc.id;
            this.order.push(data);
          });
          this.order = _.sortBy(this.order, "orderTime");
          console.log(this.order);
        });
    },
    checked(dbID) {
      this.checkedID.push(dbID);
    },
    unchecked(dbID) {
      this.checkedID = this.checkedID.filter(id => {
        return id !== dbID;
      });
    },
    removeOrder(dbID) {
      this.order = this.order.filter(el => {
        return el.id != dbID;
      });
    },
    rememberStatus() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date + " " + time;
      this.checkedID.forEach(id => {
        this.order.forEach(el => {
          if (el.id === id) {
            if (!el.doneTime) {
              el.doneTime = dateTime;
            }
            var checkedItem = {
              name: el.name,
              options: el.options,
              orderTime: el.orderTime,
              party: el.party,
              price: el.price,
              quantity: el.quantity,
              status: "checked",
              table: el.table,
              type: el.type,
              checkedTime: dateTime,
              doneTime: el.doneTime
            };
            db.collection("orderItems")
              .doc(el.id)
              .set(checkedItem)
              // eslint-disable-next-line
              .catch(error => console.log(error));
          }
        });
      });
      this.table = "";
      this.order = [];
    }
  }
};
</script>