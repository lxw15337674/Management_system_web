import store from '@/vuex/store.js';

//登录判断
const beforeEach = function (to, from, next) {
    console.log(store.state.isLogin)
    console.log(to, from, next);
    next()
};
export default {
    install(router) {
        router.beforeEach(beforeEach)
    },
}
