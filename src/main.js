import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import { routes } from "./routes";
import store from "./store/index";
import firebase from "firebase/app";
import "./components/firebaseinit";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes
});

// Nav Guards

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("tischwahl");
  else next();
});

export default router;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
