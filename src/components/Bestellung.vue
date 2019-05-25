<template>

  <div class="container text-center mt-5">

    <!-- Choose type of Menu-Item -->

    <div
      class="btn-group shadow mb-3"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-info"
        @click="selection = 'drinks'"
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

    <div class="input-group shadow my-3">
      <input
        type="text"
        class="form-control"
        placeholder="Suche"
        v-model="search"
      >
      <div class="input-group-prepend">
        <button
          class="btn-info"
          type="button"
          @click="table"
        >Bestellen</button>
      </div>
    </div>

    <!-- List of Menu Items -->

    <ul class="list-group shadow p-2 text-info">
      <Item
        v-for="(item, index) in searchMenu"
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
      selection: "drinks",
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
  computed: {
    searchMenu() {
      return this.menu.filter(item => {
        return item.name.match(this.search);
      });
    }
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