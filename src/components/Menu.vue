<template>
  <div class="container text-center text-info">
    <h2 class="mt-5">Karte bearbeiten</h2>
    <div class="row mt-5 text-left ">
      <div class="col-2"></div>
      <div class="col-8 ">
        <div class="container border rounded p-5 shadow">
          <!-- success alert -->
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
              @click="reset = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
            v-if="error"
          >
            <!-- error alert -->
            <strong>Ooops! </strong> Da ist was schiefgegangen. Bitte versuche es noch einmal.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="error = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- start menu form  -->
          <form
            @submit.prevent="onSubmit"
            id="menuForm"
          >

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
          <!-- end menu form -->
          <hr>
          <!-- succes alert for "Item deleted" -->
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
            v-if="deleted"
          >
            Das Gericht wurde gelöscht.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="deleted = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- alert for "no item found" -->
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
            v-if="noItem"
          >

            Es wurde kein Gericht mit diesem Namen in der Karte gefunden.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="noItem = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>

          </div>
          <!-- search for item in menu -->
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
              class="btn btn-lg btn-info mt-3"
            >Suchen</button>
          </form>
          <div
            v-for="(item, index) in deleteItems"
            :key="index"
          >
            <ul class="list-group shadow p-2 text-info mt-3">
              <li class="d-flex list-group-item text-left">
                <div class="p-2 bd-highlight">{{item.name}}</div>
                <div
                  class="p-2 bd-highlight ml-auto"
                  @click="deleteItem(item.id)"
                ><i class="fas fa-trash"></i></div>
              </li>
            </ul>

          </div>
        </div>

      </div>
      <div class="col-2"></div>
    </div>

  </div>

</template>

<script>
import db from "./firebaseinit";
export default {
  name: "Menu-Form",
  data() {
    return {
      name: "",
      euro: null,
      cent: null,
      options: [],
      type: "",
      success: false,
      error: false,
      searchItem: "",
      deleted: false,
      deleteItems: [],
      noItem: false
    };
  },
  methods: {
    onSubmit() {
      let newItem = {
        name: this.name,
        price: `${this.euro}.${this.cent}`,
        type: this.type
      };
      if (this.options.length > 0) {
        newItem.options = this.options;
      }

      db.collection("menu")
        .add(newItem)
        .then(() => {
          this.success = true;
          this.clearForm();
        });
    },
    onSearch() {
      db.collection("menu")
        .where("name", "==", this.searchItem)
        .get()
        .then(res => {
          if (res.empty === true) {
            this.noItem = true;
          }
          res.forEach(doc => {
            var data = doc.data();
            data.id = doc.id;
            this.deleteItems.push(data);
          });
        });
      this.searchItem = "";
    },
    clearForm() {
      (this.name = ""),
        (this.euro = null),
        (this.cent = null),
        (this.options = []),
        (this.type = "");
    },
    deleteItem(id) {
      db.collection("menu")
        .doc(id)
        .delete();
      this.deleted = true;
      this.deleteItems = [];
    }
  }
};
</script>