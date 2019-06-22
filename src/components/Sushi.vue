<template>
  <div class="container">
    <!-- start sushi div -->
    <div
      class="menuItem text-info border rounded border-info shadow"
      v-for="(item, index) in sushi"
      :key="index"
    >
      <div class="d-flex flex-row justify-content-between">
        <div class="p-2 ">
          <h4>T {{item.table}} </h4>
          <div class="text-muted">{{item.party}}</div>
        </div>
        <div class="p-2 ">
          <h4> <span
              style="color: #990000"
              class="ml-2"
            >{{item.name}} ({{item.quantity}}x)</span> </h4>
        </div>
        <div
          class="p-2 text-muted"
          v-for="(option, index) in item.options"
          :key="index"
        >{{option}} </div>
        <div class="p-2 "><i
            class="fas fa-check-circle fa-3x"
            @click="setToDone(item.id, item.name, item.orderTime, item.party, item.price, item.quantity, item.table, item.type, item.options, item.party)"
          ></i>
        </div>
      </div>
    </div>
    <div class="container text-right"><i
        class="fas fa-download fa-3x text-info mt-5"
        @click="fetchSushi"
      ></i></div>
    <!-- end sushi div -->
  </div>
</template>

<script>
import db from "./firebaseinit";
import _ from "underscore";

export default {
  name: "Sushi",
  data() {
    return {
      sushi: []
    };
  },
  created() {
    db.collection("orderItems")
      .where("type", "==", "sushi")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            var sushi = change.doc.data();
            sushi.id = change.doc.id;
            this.sushi.push(sushi);
          }
          if (change.type === "removed") {
            this.sushi.forEach(el => {
              if (el.id === change.doc.id) {
                // find element with id and delete element
                this.sushi.splice(el, 1);
              }
            });
          }
        });
      });
    this.sushi = _.sortBy(this.order, "orderTime");
  },
  methods: {
    fetchSushi() {
      db.collection("orderItems")
        .where("type", "==", "sushi")
        .get()
        .then(res => {
          res.forEach(doc => {
            var sushi = doc.data();
            sushi.id = doc.id;
            this.sushi.push(sushi);
          });
        });
      this.sushi = _.sortBy(this.order, "orderTime");
    },
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
      db.collection("orderItems")
        .doc(dbID)
        .set(doneSushi)
        .then(() => {
          this.fetchSushi();
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