<template>
  <div class="container">
    <div
      class="menuItem text-info border rounded border-info shadow"
      v-for="(item, index) in sushi"
      :key="index"
    >
      <div class="d-flex flex-row justify-content-between">
        <div class="p-2 ">
          <h4>Tisch {{item.table}}</h4>
        </div>
        <div class="p-2 ">
          <h4> <span
              style="color: #990000"
              class="ml-2"
            >{{item.name}}</span> </h4>
        </div>
        <div
          class="p-2 text-muted"
          v-for="(option, index) in item.options"
          :key="index"
        >{{option}} </div>
        <div class="p-2 "><i
            class="fas fa-check-circle fa-3x"
            @click="setToDone(item.dbID, item.name, item.orderTime, item.party, item.price, item.quantity, item.table, item.type, item.options, item.party)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "underscore";

export default {
  name: "Sushi",
  data() {
    return {
      sushi: []
    };
  },
  created() {
    this.$store.dispatch("refreshToken");
    axios
      .get(
        'https://kunz-sushi-35c35.firebaseio.com/orderItem.json?orderBy="type"&equalTo="sushi"',
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
        this.sushi = order;
      });
  },
  methods: {
    setToDone(
      dbID,
      name,
      orderTime,
      party,
      price,
      quantity,
      table,
      type,
      options
    ) {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date + " " + time;
      const doneSushi = {
        name: name,
        price: price,
        quantity: quantity,
        orderTime: orderTime,
        doneTime: dateTime,
        status: status,
        type: "done-sushi",
        table: table,
        options: options,
        party: party
      };
      axios
        .put(
          `https://kunz-sushi-35c35.firebaseio.com/orderItem/${dbID}.json`,
          doneSushi,
          {
            params: {
              auth: this.$store.getters.serveToken
            }
          }
        )
        .then(res => {
          // eslint-disable-next-line
          console.log(res);
          axios
            .get(
              'https://kunz-sushi-35c35.firebaseio.com/orderItem.json?orderBy="type"&equalTo="sushi"',
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
              this.sushi = order;
            });
        })
        // eslint-disable-next-line
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.menuItem {
  background-color: whitesmoke;
  border: 1px solid rgb(22, 170, 170);
  width: 100%;
  height: 80px;
  margin-top: 2rem;
  padding: 3px;
}
</style>