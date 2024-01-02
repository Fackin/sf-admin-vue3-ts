import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { staticRoutes } from './constantRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes as RouteRecordRaw[]
})

export default router
