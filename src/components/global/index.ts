import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon/index.vue'

const components: {
    [propName: string]: Component;
} = {
    SvgIcon,
}

export default {
    install: (app: App) => {
        for (const key in components) {
            app.component(key, components[key])
        }
    }
}