

<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar navbar-dark shadow"
      style="background-color: #990000"
    >
      <router-link
        class="navbar-brand"
        to="/"
      >KUNZ </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mx-auto">
          <li
            class="nav-item mr-4"
            v-if="isLoggedIn"
          >
            <router-link
              class="nav-link"
              to="/bestellung"
              tag="li"
              active-class="active"
              exact
            > <i class="d-none d-md-inline fas fa-shoe-prints fa-2x"></i> Bestellen </router-link>
          </li>
          <li
            class="nav-item mr-4"
            v-if="isLoggedIn"
          >
            <router-link
              class="nav-link"
              to="/check"
              tag="li"
              active-class="active"
              exact
            > <i class="d-none d-md-inline fas fa-user-check fa-2x"></i> Check </router-link>
          </li>
          <li
            class="nav-item mr-4"
            v-if="isLoggedIn"
          >
            <router-link
              class="nav-link"
              to="/sushi"
              tag="li"
              active-class="active"
              exact
            > <i class="d-none d-md-inline  fas fa-fish fa-2x"></i> Sushi </router-link>
          </li>
          <li
            class="nav-item mr-4"
            v-if="isLoggedIn"
          >
            <router-link
              class="nav-link"
              to="/bezahlen"
              tag="li"
              active-class="active"
              exact
            > <i class="d-none d-md-inline fas fa-euro-sign fa-2x"></i> Bezahlen</router-link>
          </li>
          <li
            class="nav-item mr-4"
            v-if="isLoggedIn"
          >
            <router-link
              class="nav-link"
              to="/menu"
              tag="li"
              active-class="active"
              exact
            > <i class="d-none d-md-inline fas fa-file-alt fa-2x"></i> Karte </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li
            class="nav-item"
            v-if="!isLoggedIn"
          >
            <router-link
              class="nav-link"
              to="/login"
              tag="li"
              active-class="active"
              exact
            > <i class="d-none d-md-inline fas fa-sign-in-alt fa-2x"></i> Login</router-link>
          </li>
          <li
            class="nav-item"
            v-if="isLoggedIn"
          >
            <a
              class="nav-link"
              @click="logout"
              tag="li"
              active-class="active"
              exact
            > <i class="d-none d-md-inline fas fa-sign-out-alt fa-2x"></i> Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
    



<script>
import firebase from "firebase/app";

export default {
  name: "AppHeader",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$router.go({ path: this.$router.path });
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>
