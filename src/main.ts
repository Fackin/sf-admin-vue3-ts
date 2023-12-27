import './assets/main.css'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import '@/assets/styles/element/variables.scss'
import 'element-plus/dist/index.css'
// import "@/styles/index.scss";
import "uno.css";
import SvgIcon from '@/components/SvgIcon.vue'
import pinia from './stores'
import i18n from './lang'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('svg-icon', SvgIcon)

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
