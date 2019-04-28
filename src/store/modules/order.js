import _ from 'underscore';
import { router } from '../../main';
import axios from 'axios';



const state = {
    orderItems: []
}; 

const getters = {
    orderItems: state => {
        return state.orderItems
    },
    getTableInfo() {
        axios.get('https://kunz-sushi.firebaseio.com/orderItem.json')
        .then(response => {
            state.orderItems = response.data
        })
    }
    
}; 

const mutations = {
    'SET_ITEM' (state, orderItem) {
        state.orderItems.push(orderItem);
    },
    'DELETE_ITEM' (state, index) {
        
        state.orderItems.splice(index, 1)
    },
    'ADD_TABLE' (state, tableInfo) {
        state.orderItems.forEach(function(el){
            _.extend(el, tableInfo)
        })
    },
    'ORDER' (state) {
        axios.post('https://kunz-sushi.firebaseio.com/orderItem.json', state.orderItems)
        // eslint-disable-next-line 
        .then(res => console.log(res))
        // eslint-disable-next-line 
        .catch(error => console.log(error))

    },
    'CLEAR_STATE' (state) {
        state.orderItems = []
    }
}; 

const actions = {
    updateOrderItems: ({commit}, orderItem ) => {
        commit('SET_ITEM', orderItem)
    },
    removeItem: ({commit}, index) => {

        commit('DELETE_ITEM',index)
    },
    addTable: ({commit}, tableInfo) => {
        commit('ADD_TABLE', tableInfo);
        router.push('/bestellung');
        commit('ORDER');
        commit('CLEAR_STATE')


    }
}; 

export default {
    state, 
    getters,
    actions, 
    mutations
}