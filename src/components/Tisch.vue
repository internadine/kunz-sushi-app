<template>
  <div class="container text-info">
    <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>
    <form @submit.prevent="addTable">
      <tischAnsicht></tischAnsicht>
      <div class="container text-right">
        <router-link to="/bestellung"><i class="fas fa-plus mt-3 text-info fa-3x"></i></router-link>
      </div>
      <div class="form-group mt-4 ">
        <label for="tisch">Tisch auswählen</label>
        <select
          class="form-control shadow"
          id="tisch"
          v-model="table"
        >
          <option
            v-for="(number, index) in tables"
            :key="index"
          >{{number}}</option>
          <option disabled> -- </option>
          <option>30</option>
        </select>
      </div>
      <div class="form-group mt-4">
        <label for="guests">Gäste / Gruppe</label>
        <input
          type="text"
          class="form-control"
          id="guests"
          placeholder="Gäste oder Gruppe"
          v-model="party"
        >
        <small
          id="gaesteHelp"
          class="form-text text-muted"
        >Sollten mehrer Familien oder Gruppen an einem Tisch
          platznehmen, kann man hier Namen oder Nummern vergeben.</small>
      </div>
      <div class="d-flex justify-content-center"><button
          class="btn btn-lg btn-info shadow mt-5 "
          type="submit"
        >Bestellung abschicken</button></div>

    </form>

  </div>
</template>

<script>
import tischAnsicht from "./TischAnsicht";
export default {
  name: "Tisch",
  data() {
    return {
      table: "",
      party: "",
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
    tischAnsicht
  },
  methods: {
    addTable() {
      const tableInfo = {
        table: this.table,
        party: this.party
      };
      this.$store.dispatch("refreshToken");
      this.$store.dispatch("addTable", tableInfo);
    }
  }
};
</script>