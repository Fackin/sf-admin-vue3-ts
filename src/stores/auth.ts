import { defineStore } from "pinia"
import { ref, type Ref } from "vue"
import { menus } from "./menus-data"
import type { RouteRecordRaw } from "vue-router"

export const useAuthStore = defineStore('auth', () => {
    // const authMenus = ref(menus)
    const authMenus = menus

    /** 打开的菜单 tags 展示 */
    // tags 数组
    const tagsMenus: Ref<RouteRecordRaw[]> = ref([])

    // 新增tags
    const addTagsMenus = (val: RouteRecordRaw) => {

        const index = tagsMenus.value.findIndex(item => item.path === val.path)

        console.log(index, {...tagsMenus.value}, {...val})
        if (index !== -1) {
            //TODO
        } else {
            tagsMenus.value.push(val)
        }
    }
    // 删除tags
    const removeTagsMenus = (val: RouteRecordRaw) => {
        const index = tagsMenus.value.findIndex(item => item.path === val.path)
        tagsMenus.value = tagsMenus.value.filter(item => item.path !== val.path)
        return index - 1
    }

    // 删除其他tags
     const removeOtherTagsMenus = (val: RouteRecordRaw) => {
        tagsMenus.value = tagsMenus.value.filter(item => item.path === val.path)
     }

     // 删除所有tags
      const removeAllTagsMenus = () => {
         tagsMenus.value = []
      }
    /** 当前 tag */
    // const curentTag: Ref<RouteRecordRaw | null> = ref(null)

    return { authMenus, tagsMenus, addTagsMenus, removeTagsMenus, removeOtherTagsMenus, removeAllTagsMenus }
}, {
    persist: true
  })