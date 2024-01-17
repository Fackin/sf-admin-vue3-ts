export const menus = [
    {
        path: '/admin/home',
        name: 'adminHome',
        component: () => import('../views/admin/home/HomePage.vue'),
        meta: {
            icon: 'House@ep',
            iconType: 'ep',
        }
    },
    {
        path: '/admin/demo',
        name: 'adminDemo',
        redirect: '/admin/demo/theme',
        meta: {
            icon: 'Guide@ep',
            iconType: 'ep',
        },
        children: [
            {
                path: '/admin/demo/theme',
                name: 'DemoTheme',
                component: () => import('../views/admin/demo/DemoTheme.vue'),
                meta: {
                    icon: 'Document@ep',
                    iconType: 'ep',
                }
            },
            {
                path: '/admin/demo/locals',
                name: 'DemoLocals',
                component: () => import('../views/admin/demo/DemoLocals.vue'),
                meta: {
                    icon: 'bx:bxl-instagram@ify',
                    iconType: 'ep',
                }
            },
            {
                path: '/admin/demo/calendar',
                name: 'DemoCalendar',
                component: () => import('@/views/admin/demo/DemoCalendar.vue'),
                meta: {
                    icon: 'House@ep',
                    iconType: 'ep',
                }
            },
            {
                path: '/admin/demo/swiper-banner',
                name: 'DemoSwiperBanner',
                component: () => import('@/views/admin/demo/DemoSwiperBanner.vue'),
                meta: {
                    icon: 'House@ep',
                    iconType: 'ep',
                }
            },
            {
                path: '/admin/demo/box-shadow',
                name: 'DemoBoxShadow',
                component: () => import('@/views/admin/demo/DemoBoxShadow.vue'),
                meta: {
                    icon: 'House@ep',
                    iconType: 'ep',
                }
            },

        ]
    },
    {
        path: '/admin/css-demo',
        name: 'cssDemo',
        redirect: '/admin/cssDemo/webpackLogo',
        meta: {
            icon: 'Guide@ep',
            iconType: 'ep',
        },
        children: [
            {
                path: '/admin/cssDemo/webpackLogo',
                name: 'WebpackLogo',
                component: () => import('../views/admin/cssDemo/webpackLogo/index.vue'),
                meta: {
                    icon: 'Document@ep',
                    iconType: 'ep',
                }
            },
            {
                path: '/admin/cssDemo/colorLoading',
                name: 'colorLoading',
                component: () => import('../views/admin/cssDemo/colorLoading/index.vue'),
                meta: {
                    icon: 'Document@ep',
                    iconType: 'ep',
                }
            },


        ]
    },
    {
        path: '/admin/theme',
        name: 'Theme',
        component: () => import('../views/admin/demo/DemoTheme.vue'),
        meta: {
            icon: 'bug@svg',
            iconType: 'ep',
        }
    },
    {
        path: '/admin/locals',
        name: 'Locals',
        component: () => import('../views/admin/demo/DemoLocals.vue'),
        meta: {
            icon: 'House@ep',
            iconType: 'ep',
        }
    },
    {
        path: '/admin/calendar',
        name: 'Calendar',
        component: () => import('@/views/admin/demo/DemoCalendar.vue'),
        meta: {
            icon: 'House@ep',
            iconType: 'ep',
        }
    },
]