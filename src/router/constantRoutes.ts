import type { RouteRecordRaw } from 'vue-router'

const HomePage = () => import('@/views/HomePage.vue')
const HomeView = () => import('@/views/HomeView.vue')
const Layout = () => import('@/layout/index.vue')

/**
 * @description 静态路由
 */
export const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '/',
        component: HomePage,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/AboutView.vue')
            },
            {
                path: '/counter',
                name: 'counter',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/CounterView.vue')
            },
        ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/counter',
    //   name: 'counter',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/CounterView.vue')
    // },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/admin/login/LoginPage.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/home',
        component: Layout,
        children: [
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
            //   {
            //     path: '/admin/home',
            //     name: 'adminHome',
            //     component: () => import('../views/admin/home/HomePage.vue')
            //   },
        ]
    },
]