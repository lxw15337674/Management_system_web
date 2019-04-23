const notFound = () => import("@/views/404.vue");
const login = () => import ("@/views/login/index.vue");
const home = () => import ("@/views/home/index.vue");


const routes =  [
        {
            path: "/",
            component: home,
            name:'home',
        },
        {
            path: "/login",
            component: login,
            name:'login',
        },
        {
            path: '*',
            component: notFound
        }
]

export default routes;
