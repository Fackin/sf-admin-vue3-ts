import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import i18n from '@/lang'
import type { LocalType } from '@/lang/types'

// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs'
// 导入 Element Plus 中英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

// type localType = 'zh-cn' | 'en'

export const useGlobalStore = defineStore('global', () => {
    const language = ref('zh-cn')

    const local = computed(() => {
        if (language?.value === 'zh-cn') {
            return zhCn
        } else {
            return en
        }
    })

    const changeLanguage = (val: LocalType) => {
        language.value = val
        i18n.global.locale.value = val
    }

    return { language, local, changeLanguage }
},
{
  persist: {
    afterRestore: (ctx) => {
      console.log(`刚刚恢复完 '${ctx.store.$id}'`, ctx.store)
      i18n.global.locale.value = ctx.store.$state.language || 'zh-cn'
    },
  }
})