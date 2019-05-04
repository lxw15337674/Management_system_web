import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            id:'',
            nickname:'',
            username: '',
            user_type: '',
            last_login_time:'',
            create_time:'',
        }
    },
    mutations: {
        login: (state, data) => {
            state.user=data
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout: (state) => {
            state.user = {
                id:'',
                nickname:'',
                username: '',
                user_type: '',
                last_login_time:'',
                create_time:'',
            };
            localStorage.clear();
        }
    },
    getters: {
        username: (state) => {
            return state.user.username
        },
        user_type: (state) => state.user.user_type,
    },
    actions: {}
});
