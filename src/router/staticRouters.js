const routes = [
    {
        path: "/",
        component: () => import ("@/views/home/index.vue"),
        redirect:'inventoryManagement',
        name: 'home',
        meta: {
            showInSideBar: true,
            title: '库存管理',
        },
    },
    {
        path: "/login",
        component: () => import ("@/views/login/index.vue"),
        name: 'login',
        meta: {
            title: '登录',
        }
    },
    {
        path: "/import",
        component: () => import ("@/views/import-commodity/index.vue"),
        name: 'import',
        meta: {
            showInSideBar: true,
            title: '入库',
        }
    },
    {
        path: "/export",
        component: () => import ("@/views/export-commodity/index.vue"),
        name: 'export',
        meta: {
            showInSideBar: true,
            title: '出库',
        }
    },
    {
        path: "/inventoryManagement",
        component: () => import ("@/views/inventoryManagement/index.vue"),
        name: 'inventoryManagement',
        meta: {
            showInSideBar: false,
            title: '库存管理',
        }
    },

    {
        path: "/export-order",
        component: () => import ("@/views/export-order/index.vue"),
        name: 'export-order',
        meta: {
            showInSideBar: true,
            title: '出库单详情',
        },
    },
    {
        path: "/importOrder",
        component: () => import ("@/views/import-order/index.vue"),
        name: 'importOrder',
        meta: {
            showInSideBar: true,
            title: '入库单详情',
        },
    },
    {
        path: "/importCount",
        component: () => import ("@/views/report/importCount/index.vue"),
        name: 'importCount',
        meta: {
            showInSideBar: true,
            title: '商品入库统计',
        },
    },
    {
        path: "/exportCount",
        component: () => import ("@/views/report/exportConut/index.vue"),
        name: 'exportCount',
        meta: {
            showInSideBar: true,
            title: '商品出库统计',
        },
    },

    {
        path: "/reportCount",
        name: 'reportCount',
        component: () => import ("@/views/report/reportCount/index.vue"),
        meta: {
            showInSideBar: true,
            title: '报表统计',
        },
    },
    {
        path: "/userManager",
        component: () => import ("@/views/userManager/index.vue"),
        name: 'userManager',
        meta: {
            showInSideBar: true,
            title: '系统管理',
        },
    },
    {
        path: '*',
        component: () => import("@/views/404.vue"),
    }
];

export default routes;
