import Vuex from 'vuex'; 
import Vue from 'vue'; 
import order from './modules/order'

Vue.use(Vuex); 

export default new Vuex.Store({
    modules: {
        order
    }
});