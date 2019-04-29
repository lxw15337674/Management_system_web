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
        component: () => import ("@/views/login/index.vue"),
        name: 'import',
        meta: {
            showInSideBar: true,
            title: '入库',
        }
    },
    {
        path: "/export",
        component: () => import ("@/views/login/index.vue"),
        name: '/export',
        meta: {
            showInSideBar: true,
            title: '出库',
        }
    },
    {
        path: "/inventoryManagement",
        component: () => import ("@/views/login/index.vue"),
        name: 'inventoryManagement',
        meta: {
            showInSideBar: true,
            title: '库存管理',
        }
    },
    {
        path: "/return",
        component: () => import ("@/views/login/index.vue"),
        name: 'return',
        meta: {
            showInSideBar: true,
            title: '退换货处理',
        },
    },
    {
        path: "/report",
        component: () => import ("@/views/login/index.vue"),
        name: 'report',
        meta: {
            showInSideBar: true,
            title: '报表统计',
        },
        children: [
            {
                path: "/importCount",
                component: () => import ("@/views/login/index.vue"),
                name: 'importCount',
                meta: {
                    showInSideBar: true,
                    title: '入库',
                },
            },
            {
                path: "/exportCount",
                component: () => import ("@/views/login/index.vue"),
                name: 'exportCount',
                meta: {
                    showInSideBar: true,
                    title: '出库',
                },
            },
            {
                path: "/staffImport",
                component: () => import ("@/views/login/index.vue"),
                name: 'staffImport',
                meta: {
                    showInSideBar: true,
                    title: '员工入库',
                },
            },
            {
                path: "/staffExport",
                component: () => import ("@/views/login/index.vue"),
                name: 'staffExport',
                meta: {
                    showInSideBar: true,
                    title: '员工出库',
                },
            },
            {
                path: "/profit",
                component: () => import ("@/views/login/index.vue"),
                name: 'profit',
                meta: {
                    showInSideBar: true,
                    title: '利润',
                },
            },
            {
                path: "/order",
                component: () => import ("@/views/login/index.vue"),
                name: 'order',
                meta: {
                    showInSideBar: true,
                    title: '订单',
                },
            },
        ]
    },
    {
        path: "/userManager",
        component: () => import ("@/views/userManager/index.vue"),
        name:'userManager',
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
