import _ from 'underscore';

const state = {
    orderItems: []
}; 

const getters = {
    orderItems: state => {
        return state.orderItems
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
        commit('ADD_TABLE', tableInfo)
    }
}; 

export default {
    state, 
    getters,
    actions, 
    mutations
}