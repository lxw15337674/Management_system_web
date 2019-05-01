const routes = [
    {
        path: "/",
        component: () => import ("@/views/home/index.vue"),
        name: 'home',
        meta: {
            showInSideBar: true,
            title: '首页',
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
            showInSideBar: true,
            title: '库存管理',
        }
    },
    {
        path: "/return",
        component: () => import ("@/views/return/index.vue"),
        name: 'return',
        meta: {
            showInSideBar: true,
            title: '退换货处理',
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
    // {
    //     path: "/staffExport",
    //     component: () => import ("@/views/report/staffExport/index.vue"),
    //     name: 'staffExport',
    //     meta: {
    //         showInSideBar: true,
    //         title: '员工出库统计',
    //     },
    // },
    // {
    //     path: "/staffImport",
    //     component: () => import ("@/views/report/staffImport/index.vue"),
    //     name: 'staffImport',
    //     meta: {
    //         showInSideBar: true,
    //         title: '员工入库统计',
    //     },
    // },
    // {
    //     path: "/profit",
    //     component: () => import ("@/views/report/profit/index.vue"),
    //     name: 'profit',
    //     meta: {
    //         showInSideBar: true,
    //         title: '利润统计',
    //     },
    // },
    // {
    //     path: "/order",
    //     component: () => import ("@/views/report/order/index.vue"),
    //     name: 'order',
    //     meta: {
    //         showInSideBar: true,
    //         title: '订单统计',
    //     },
    // },


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
