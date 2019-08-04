<template>
  <div class="container  text-center mt-5">
    <!-- Choose type of Menu-Item -->
    <div
      class="btn-group shadow mb-2"
      role="group"
      aria-label="Basic example"
    >
      <router-link to="/sushi">

        <button
          type="button"
          class="btn btn-info"
        ><i class="fas fa-fish"></i>
          Zurück zum Sushi</button>

      </router-link>

    </div>

    <hr />
    <!-- Done Sushi Table  -->
    <table class="table text-muted">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Tisch</th>
          <th scope="col">Gruppe</th>
          <th scope="col">Sushi</th>
          <th scope="col">Menge</th>
          <th scope="col">Erledigt</th>
          <th scope="col">Zurück</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(sushi, index) in sushi"
          :key="index"
        >
          <th scope="row">{{sushi.table}}</th>
          <td>{{sushi.party}}</td>
          <td>{{sushi.name}}</td>
          <td>{{sushi.quantity}}</td>
          <td>{{sushi.doneTime}}</td>
          <td><i
              class="fas fa-undo-alt"
              @click="resetSushi(sushi.id)"
            ></i></td>
        </tr>
      </tbody>
    </table>

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
      .where("type", "==", "done-sushi")
      .orderBy("doneTime", "desc")
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
    resetSushi(sushiId) {
      db.collection("orderItems")
        .doc(sushiId)
        .set({ type: "sushi" }, { merge: true });
    }
  }
};
</script>

<style scoped>
.thead {
  background-color: #5bc0de;
}
</style>