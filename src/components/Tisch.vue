<template>
  <div class="container text-info">
    <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>
    <!-- start table form  -->
    <form @submit.prevent="addTable">
      <!-- list of choosen items -->
      <tischAnsicht></tischAnsicht>
      <!-- add more items to table -->
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
            v-for="(number, index) in 20"
            :key="index"
          >{{number}}</option>
          <option disabled> -- </option>
          <option>30</option>
        </select>
      </div>

      <!-- give party or group a name -->
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
      <!-- submit button  -->
      <div class="d-flex justify-content-center"><button
          class="btn btn-lg btn-info shadow mt-5 "
          type="submit"
          v-if="table"
        >Bestellung abschicken</button>
        <div
          v-else
          class="alert alert-danger"
          role="alert"
        >
          Bitte erst einen Tisch auswählen!
        </div>
      </div>

    </form>
    <!-- end of form  -->

  </div>
</template>

<script>
import tischAnsicht from "./TischAnsicht";
export default {
  name: "Tisch",

  data() {
    return {
      party: "",
      table: null
    };
  },
  created() {
    var table = this.$store.getters.table;
    this.table = table.toString();
  },

  components: {
    tischAnsicht
  },
  methods: {
    addTable() {
      const tableInfo = {
        party: this.party,
        table: this.table
      };
      this.$store.dispatch("addTable", tableInfo);
    }
  }
};
</script>