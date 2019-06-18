<template>
  <div class="container text-info">
    <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>

    <div class="form-group mt-4 ">
      <label for="tisch">Tisch auswählen</label>
      <select
        class="form-control shadow"
        id="tisch"
        v-model="table"
        @change="getTableData"
      >

        <option
          v-for="(number, index) in tables"
          :key="index"
        >{{number}}</option>
        <option disabled> -- </option>
        <option>30</option>
      </select>
    </div>
    <div
      v-if="order.length == 0 && table !== ''"
      class="alert alert-info mt-5"
      role="alert"
    >
      An Tisch {{table}} ist keine Bestellung gespeichert.
    </div>

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
import axios from "axios";
import _ from "underscore";
import Check from "./CheckTischItem";
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
      this.$store.dispatch("refreshToken");
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
          for (const key in data) {
            let item = data[key];
            item = _.extend(item, {
              dbID: key
            });
            item.id = data[key];
            order.push(item);
          }
          order = _.sortBy(order, "orderTime");
          this.order = order;
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
        return el.dbID != dbID;
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
          if (el.dbID === id) {
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
              checkedTime: dateTime
            };
            axios
              .put(
                `https://kunz-sushi-35c35.firebaseio.com/orderItem/${
                  el.dbID
                }.json`,
                checkedItem,
                {
                  params: {
                    auth: this.$store.getters.serveToken
                  }
                }
              )
              .then(res => {
                // eslint-disable-next-line
                console.log(res);
              })
              // eslint-disable-next-line
              .catch(error => console.log(error));
          }
        });
      });
    }
  }
};
</script>