import store from '@/vuex/store.js';
import Vue from 'vue'

//登录判断
const beforeEach = function (to, from, next) {

        //刷新页面获取登录信息
        let user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            store.commit('login',user);
        }

        //进行登录判断，如果未登录则进入登录界面
        if (to.name !== 'login') {
            if (localStorage.getItem('isLogin')) {
                next()
            } else {
                Vue.prototype.$message({
                    message: '请登录',
                    type: 'error'
                });
                next({name: 'login'})
            }
        } else {
            if(store.getters.username){
                Vue.prototype.$message({
                    message: '已登录',
                    type: 'error'
                });
                next({name: 'home'})
            }else{
                next()
            }
        }
    }
;
export default {
    install(router) {
        router.beforeEach(beforeEach)
    },
}
