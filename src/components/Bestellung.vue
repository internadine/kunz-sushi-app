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

    <!-- List of Menu Items -->

    <ul class="list-group shadow p-2 text-info">
      <Item
        v-for="(item, index) in menu"
        :key="index"
        :item="item"
        :selection="selection"
      ></Item>
    </ul>

    <router-link to="/tisch"><i class="fas fa-check-circle fa-4x text-info mt-5"></i></router-link>
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
      attachBG: false
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
  }
};
</script>

<style scoped>
.green {
  background-color: #e0e0e0;
}
</style>