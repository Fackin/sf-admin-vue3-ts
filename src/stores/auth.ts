import { defineStore } from "pinia"
import { ref, type Ref } from "vue"
import { menus } from "./menus-data"
import type { RouteRecordRaw } from "vue-router"

export const useAuthStore = defineStore('auth', () => {
    const authMenus = ref(menus)

    /** 打开的菜单 tags 展示 */
    // tags 数组
    const tagsMenus: Ref<RouteRecordRaw[]> = ref([])

    // 新增tags
    const addTagsMenus = (val: RouteRecordRaw) => {
        const index = tagsMenus.value.findIndex(item => item.path === val.path)
        if (index !== -1) {
            //TODO
        } else {
            tagsMenus.value.push(val)
        }
    }
    // 删除tags
    const removeTagsMenus = (val: RouteRecordRaw) => {
        tagsMenus.value = tagsMenus.value.filter(item => item.path !== val.path)
    }

    /** 当前 tag */
    // const curentTag: Ref<RouteRecordRaw | null> = ref(null)

    return { authMenus, tagsMenus, addTagsMenus, removeTagsMenus }
}, {
    persist: true
  })