import _ from 'underscore';
import { router } from '../../main';
import axios from 'axios';
import * as firebase from "firebase/app"
import 'firebase/auth'


const state = {
    orderItems: [],
    doneSushi: [],
    UserID: null,
}; 

const getters = {
    orderItems: state => {
        return state.orderItems
    },
    getTableInfo() {
        axios.get('https://kunz-sushi-35c35.firebaseio.com/orderItem.json', {
            params: {
              auth: state.UserID
            }})
        .then(response => {
            state.orderItems = response.data
        })
    },
    isLoggedIn: (state) => {
        if (state.UserID != null) {
            return true
        }
    },
    serveToken: (state) => state.UserID
}; 

const mutations = {

    'SET_ITEM' (state, orderItem) {

            state.orderItems.push(orderItem)
    },
    'DELETE_ITEM' (state, index) {
        
        state.orderItems.splice(index, 1)
    },
    'ADD_TABLE' (state, tableInfo) {
        state.orderItems.forEach(function(el){
            _.extend(el, tableInfo)
        })
    },
    'ORDER' (state, idToken) {
        state.orderItems.forEach(function(el) {
              axios.post(`https://kunz-sushi-35c35.firebaseio.com/orderItem.json?auth=${idToken}`, el)
        .then(res => {
            // eslint-disable-next-line 
            console.log(res);
            state.orderItems = []
        })
        // eslint-disable-next-line 
        .catch(error => console.log(error))
        })

    },
    'CLEAR_STATE' (state) {
        state.orderItems = []
    }, 
    'SET_UID' (state, idToken) {
        state.UserID = idToken
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
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            commit('ORDER', idToken);
          }).catch(function(error) {
            // eslint-disable-next-line
            console.log(error)
          });
        router.push('/bestellung');
    },
    saveUserId: ({commit}, idToken) => {
        commit('SET_UID', idToken)
    }, 
    logout: ({commit}) => {
        commit('SET_UID', null);
        router.push('/')
    }
}; 

export default {
    state, 
    getters,
    actions, 
    mutations
}