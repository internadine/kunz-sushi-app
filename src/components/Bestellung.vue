<template>

  <div class="container text-center mt-5">

    <!-- Choose type of Menu-Item -->
    <div
      class="btn-group shadow mb-2"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-info"
        @click="selection = 'sonstige'"
      ><i class="fas fa-wine-bottle"></i>
        Getränke</button>
      <button
        type="button"
        class="btn btn-info"
        @click="selection = 'dish'"
      ><i class="fas fa-utensils"></i>
        Gerichte</button>
      <button
        type="button"
        class="btn btn-info"
        @click="selection = 'sushi'"
      > <i class="fas fa-fish"></i>
        Sushi</button>
    </div>

    <hr />

    <!-- Choose type of drink  -->
    <div
      v-if="selection === 'sonstige' || selection === 'bier' | selection === 'wein'"
      class="btn-group shadow mb-3"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-info"
        @click="selection = 'sonstige'"
      ><i class="fas fa-coffee"></i>
        Ohne Alk.</button>
      <button
        type="button"
        class="btn btn-info"
        @click="selection = 'bier'"
      ><i class="fas fa-beer"></i>
        Bier</button>
      <button
        type="button"
        class="btn btn-info"
        @click="selection = 'wein'"
      > <i class="fas fa-wine-glass"></i>
        Wein </button>
    </div>

    <!-- List of Menu Items -->

    <ul class="list-group shadow p-2 text-info">
      <Item
        v-for="(item, index) in menu"
        :key="index"
        :item="item"
        :selection="selection"
      ></Item>
    </ul>

    <router-link to="/tisch"><button class="btn-lg btn-info mt-3 shadow">Bestellen</button></router-link>
  </div>

</template>

<script>
import Item from "./Item.vue";
import db from "./firebaseinit";

export default {
  name: "Bestellung",

  components: {
    Item
  },
  data() {
    return {
      menu: [],
      selection: "sonstige"
    };
  },
  created() {
    //  real-time listener on Menu-Collection
    db.collection("menu").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          // add id to dataset and push to this.menu
          var data = change.doc.data();
          this.menu.push(data);
          this.menu.sort();
          // sort by name in alphabetical order
          this.menu.sort(function(a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        }
        if (change.type === "removed") {
          this.menu.forEach(el => {
            if (el.id === change.doc.id) {
              // find element with id and delete element
              this.menu.splice(el, 1);
            }
          });
        }
      });
    });
  }
};
</script>