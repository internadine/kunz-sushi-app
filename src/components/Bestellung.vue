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
import axios from "axios";

export default {
  name: "Bestellung",

  components: {
    Item
  },
  data() {
    return {
      menu: [],
      selection: "sonstige",
      attachBG: false,
      search: ""
    };
  },
  created() {
    this.$store.dispatch("refreshToken");
    axios
      .get("https://kunz-sushi-35c35.firebaseio.com/menu.json", {
        params: {
          auth: this.$store.getters.serveToken
        }
      })
      .then(response => {
        const data = response.data;
        const menu = [];
        for (let key in data) {
          const item = data[key];
          item.id = data[key];
          menu.push(item);
        }
        this.menu = menu;
      });
  },

  methods: {
    table() {
      this.$router.push("/tisch");
    }
  }
};
</script>

<style scoped>
.green {
  background-color: #e0e0e0;
}
</style>