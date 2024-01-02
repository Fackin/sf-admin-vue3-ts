import router from "./index"
import NProgress from 'nprogress'
import '@/assets/styles/nprogress.css'

NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
})

/**
 * 路由拦截
 */
router.beforeEach((to, from, next) => {
    NProgress.start()

    // 1、登录页面 已登陆的直接放行
    // 2、白名单通行
    // 3、是否登录过（是否有token）没有的跳转登录页 携带原路径
    // 4、
    return next()
})

router.afterEach(() => {
    NProgress.done()
})

router.onError(() => {
    NProgress.done()
})