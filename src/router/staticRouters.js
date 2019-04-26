const routes = [
    {
        path: "/",
        // redirect:'/login',
        component: () => import ("@/views/home/index.vue"),
        name: 'home',
    },
    {
        path: "/login",
        component: () => import ("@/views/login/index.vue"),
        name: 'login',
    },
    {
        path: '*',
        component: () => import("@/views/404.vue"),
    }
];

export default routes;
