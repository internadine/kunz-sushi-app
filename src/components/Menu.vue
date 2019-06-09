<template>
  <div class="container text-center text-info">
    <h2 class="mt-5">Karte bearbeiten</h2>
    <div class="row mt-5 text-left ">
      <div class="col-2"></div>
      <div class="col-8 ">
        <div class="container border rounded p-5 shadow">
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
            v-if="success"
          >
            <strong>Super! </strong> Das neue Gericht ist gespeichert.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="resetSuccess"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
            v-if="error"
          >
            <strong>Ooops! </strong> Da ist was schiefgegangen. Bitte versuche es noch einmal.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="resetSuccess"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form
            @submit.prevent="onSubmit"
            id="menuForm"
          >
            <div class="form-group">
              <label for="number">Number</label>
              <input
                type="number"
                name=""
                id="number"
                placeholder="Nummer"
                class="form-control"
                v-model="number"
              >
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="Name"
                class="form-control"
                v-model="name"
              >
            </div>
            <div class="form-group row">
              <div class="col">
                <label for="price">Euro</label>
                <input
                  type="currency"
                  name=""
                  id="price"
                  placeholder="Preis in Euro"
                  class="form-control"
                  v-model="euro"
                >
              </div>
              <div class="col">
                <label for="price">Cent</label>
                <input
                  type="currency"
                  name=""
                  id="price"
                  placeholder="Preis in Euro"
                  class="form-control"
                  v-model="cent"
                >

              </div>

            </div>

            <div class="container p-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="sonstige"
                  value="sonstige"
                  v-model="type"
                >
                <label
                  class="form-check-label"
                  for="sonstige"
                >Alkoholfrei</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="bier"
                  value="bier"
                  v-model="type"
                >
                <label
                  class="form-check-label"
                  for="drinks"
                >Bier</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="wein"
                  value="wein"
                  v-model="type"
                >
                <label
                  class="form-check-label"
                  for="drinks"
                >Wein</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="dish"
                  value="dish"
                  v-model="type"
                >
                <label
                  class="form-check-label"
                  for="dish"
                >Gericht</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="sushi"
                  value="sushi"
                  v-model="type"
                >
                <label
                  class="form-check-label"
                  for="sushi"
                >Sushi</label>
              </div>

            </div>
            <hr>
            <div class="container p-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="lachs"
                  value="Lachs"
                  v-model="options"
                >
                <label
                  class="form-check-label"
                  for="lachs"
                >Lachs</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="thun"
                  value="Thun"
                  v-model="options"
                >
                <label
                  class="form-check-label"
                  for="thun"
                >Thun</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="Garnele"
                  value="Garnele"
                  v-model="options"
                >
                <label
                  class="form-check-label"
                  for="garnele"
                >Garnele</label>
              </div>
            </div>
            <hr>
            <div class="container">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="mango"
                  value="Mango"
                  v-model="options"
                >
                <label
                  class="form-check-label"
                  for="mango"
                >Mango</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gurke"
                  value="Gurke"
                  v-model="options"
                >
                <label
                  class="form-check-label"
                  for="thun"
                >Gurke</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="avo"
                  value="Avo"
                  v-model="options"
                >
                <label
                  class="form-check-label"
                  for="avo"
                >Avocado</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="frischkaese"
                  value="Frischkäse"
                  v-model="options"
                >
                <label
                  class="form-check-label"
                  for="frischkaese"
                >Frischkäse</label>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-lg btn-info mt-5"
            >Anlegen</button>

          </form>

          <hr>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
            v-if="deleted"
          >
            <strong>Super! </strong> Das neue Gericht ist gelöscht.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="resetDeleted"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>

          </div>

          <form
            @submit.prevent="onSearch"
            class="mt-5"
            action=""
          >
            <div class="form-group">
              <label for="number">Gericht löschen</label>
              <input
                type="text"
                name=""
                id="search"
                placeholder="Name des Gerichts"
                class="form-control"
                v-model="searchItem"
              >
            </div>
            <button
              type="submit"
              class="btn btn-lg btn-danger mt-3"
            >Gericht löschen</button>
          </form>

        </div>

      </div>
      <div class="col-2"></div>
    </div>

  </div>

</template>

<script>
import axios from "axios";
import _ from "underscore";
export default {
  name: "Menu-Form",
  data() {
    return {
      number: null,
      name: "",
      euro: null,
      cent: null,
      options: [],
      type: "",
      success: false,
      error: false,
      searchItem: "",
      deleted: false
    };
  },
  methods: {
    onSearch() {
      this.$store.dispatch("refreshToken");
      axios
        .get(
          `https://kunz-sushi-35c35.firebaseio.com/menu.json?orderBy="name"&equalTo="${
            this.searchItem
          }"`,
          {
            params: {
              auth: this.$store.getters.serveToken
            }
          }
        )

        .then(response => {
          const data = response.data;
          let Item = [];
          for (const key in data) {
            let item = data[key];
            item = _.extend(item, {
              dbID: key
            });
            axios.delete(
              `https://kunz-sushi-35c35.firebaseio.com/menu/${item.dbID}.json`,
              {
                params: {
                  auth: this.$store.getters.serveToken
                }
              }
            );
          }
        })
        .then(res => {
          this.deleted = true;
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
    },

    onSubmit() {
      const formData = {
        number: this.number,
        name: this.name,
        price: `${this.euro}.${this.cent}`,
        options: this.options,
        type: this.type
      };
      this.$store.dispatch("refreshToken");
      axios
        .post("https://kunz-sushi-35c35.firebaseio.com/menu.json", formData, {
          params: {
            auth: this.$store.getters.serveToken
          }
        })

        .then(res => {
          // eslint-disable-next-line
          console.log(res);
          this.success = true;
          this.clearForm();
        })

        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          this.error = true;
          this.clearForm();
        });
    },
    resetSuccess() {
      this.success = false;
    },
    resetError() {
      this.error = false;
    },
    resetDeleted() {
      this.deleted = false;
    },
    clearForm() {
      (this.number = null),
        (this.name = ""),
        (this.euro = null),
        (this.cent = null),
        (this.options = []),
        (this.type = "");
    }
  }
};
</script>