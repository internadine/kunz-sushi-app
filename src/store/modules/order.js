const state = {
    order: []
}; 

const getters = {
    showOrder: (state) => state.order
    }
; 

const actions = {
    checkOut: ({commit}) => {
        commit('clearTable');
        //any ajax request to firebase to save data
    }
}; 

const mutations = {
    setOrder: (state, addItem) => {
        state.order.push(addItem)
    },
    clearTable: (state) => {
        state.order = []
    }
}; 

export default {
    state, 
    getters,
    actions, 
    mutations
}