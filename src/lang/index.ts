import { createI18n } from 'vue-i18n'
// import { useGlobalStore } from '@/stores/global'

import enDemoLocal from './demo/en'
import zhCnDemoLocal from './demo/zh-cn'
import enLocal from './en'
import zhCnLocal from './zh-cn'

// const globalStore = useGlobalStore()
const currentLanguage = navigator.language.replace(/-(\S*)/, '')


const messages = {
    en: {
      ...enLocal,
      ...enDemoLocal
    },
    'zh-cn': {
      ...zhCnLocal,
      ...zhCnDemoLocal
    }
}
const i18n = createI18n({
    legacy: false, // 如果想在composition api中使用需要设置为false
    locale: currentLanguage, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    globalInjection: true,
})

export default i18n