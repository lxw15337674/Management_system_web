import routes from './staticRouters';
import Interceptor from './base-interceptor';
import Router from 'vue-router';
import Vue from 'vue';


Vue.use(Router);

const router = new Router({
    base: process.env.BASE_URL,
    routes,
})
Interceptor.install(router);


export default router;
