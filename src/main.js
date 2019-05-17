import Vue from 'vue'; 
import VueRouter from 'vue-router'
import App from './App';
import { routes } from './routes'
import store from './store/index'; 
import firebase from 'firebase/app';
import 'firebase/database';

// firebase init goes here
const firebaseConfig = {
  apiKey: "AIzaSyCuCbtKhVGePifCSyXk5U7DGwXoGBkDrOw",
  authDomain: "kunz-sushi-35c35.firebaseapp.com",
  databaseURL: "https://kunz-sushi-35c35.firebaseio.com",
  projectId: "kunz-sushi-35c35",
  storageBucket: "kunz-sushi-35c35.appspot.com",
  messagingSenderId: "580813307436",
  appId: "1:580813307436:web:62b052349368886d"
};
firebase.initializeApp(firebaseConfig)


Vue.use(VueRouter); 

export const router =  new VueRouter({
    mode: 'history',
    routes
  });





new Vue({
    store,
    router,
    render: h=> h(App)

}).$mount('#app'); 