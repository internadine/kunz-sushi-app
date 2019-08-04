<template>
  <div class="container text-center mt-5">

    <!-- Choose type of Menu-Item -->
    <div
      class="btn-group shadow mb-2"
      role="group"
      aria-label="Basic example"
    >
      <router-link to="doneSushi"><button
          type="button"
          class="btn btn-info"
          @click="selection = 'sushi'"
        > <i class="fas fa-fish"></i>
          Erledigt</button></router-link>

    </div>

    <hr />

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
            @click="setToDone(item.id)"
          ></i>
        </div>
      </div>
    </div>

    <!-- end sushi div -->
  </div>
</template>

<script>
import db from "./firebaseinit";

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
      .orderBy("orderTime", "asc")
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
  },
  methods: {
    setToDone(dbID) {
      const doneSushi = {
        doneTime: Date.now(),
        type: "done-sushi"
      };
      db.collection("orderItems")
        .doc(dbID)
        .set(doneSushi, { merge: true })
        .then(this.fetchSushi())
        // eslint-disable-next-line
        .catch(error => console.log(error));
    },
    fetchSushi() {
      this.sushi = [];
      db.collection("orderItems")
        .where("type", "==", "sushi")
        .orderBy("orderTime")
        .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              var sushi = change.doc.data();
              sushi.id = change.doc.id;
              this.sushi.push(sushi);
            }
          });
        });
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