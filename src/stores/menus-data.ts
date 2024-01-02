export const menus = [
    {
        path: '/admin/home',
        name: 'adminHome',
        component: () => import('../views/admin/home/HomePage.vue')
    },
    {
        path: '/admin/demo',
        name: 'adminDemo',
        redirect: '/admin/demo/theme',
        children: [
            {
                path: '/admin/demo/theme',
                name: 'DemoTheme',
                component: () => import('../views/admin/demo/DemoTheme.vue')
            },
            {
                path: '/admin/demo/locals',
                name: 'DemoLocals',
                component: () => import('../views/admin/demo/DemoLocals.vue')
            },
            {
                path: '/admin/demo/calendar',
                name: 'DemoCalendar',
                component: () => import('@/views/admin/demo/DemoCalendar.vue')
            },

        ]
    },
    {
        path: '/admin/theme',
        name: 'Theme',
        component: () => import('../views/admin/demo/DemoTheme.vue')
    },
    {
        path: '/admin/locals',
        name: 'Locals',
        component: () => import('../views/admin/demo/DemoLocals.vue')
    },
    {
        path: '/admin/calendar',
        name: 'Calendar',
        component: () => import('@/views/admin/demo/DemoCalendar.vue')
    },
]