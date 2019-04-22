import Vue from 'vue'; 
import VueRouter from 'vue-router'
import App from './App';
import Bestellung from './components/Bestellung'; 
import Bezahlen from './components/Bezahlen'; 
import Sushi from './components/Sushi'; 
import store from './store/index'; 
import Menu from './components/Menu';
import Tisch from './components/Tisch'


Vue.use(VueRouter); 


const router = new VueRouter({
    mode: 'history',
    routes: [
    {path: '/bestellung', component: Bestellung},
    {path: '/sushi', component: Sushi},
    {path: '/bezahlen', component: Bezahlen},
    {path: '/menu', component: Menu},
    {path: '/tisch', component: Tisch},
    ]
})

new Vue({
    store,
    router,
    render: h=> h(App)

}).$mount('#app'); 