import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userName: '' || localStorage.getItem('user_name')
    },
    mutations: {
        handleUserName: (state, userName) => {
            state.userName = userName
            localStorage.setItem('userName', userName)
        }
    },
    getters: {
        userName: (state) => state.user_name
    },
    actions: {}
});
